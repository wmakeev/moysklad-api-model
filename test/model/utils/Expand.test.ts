import {
  Account,
  AttributeType,
  AssortmentMetaType,
  Collection,
  CompanyType,
  CustomerOrder,
  CustomerOrderPosition,
  EntityRef,
  Expand,
  ExpandedField,
  ExpandField,
  ExpandPath,
  Meta,
  Counterparty,
  Organization,
  AttributeBase,
  Entity,
  Product,
  DocumentWithPositions,
  Metadata
} from '../../../src'

//#region
// Expanded CustomerOrder.agent
const t08_09_1: Counterparty | Organization = {} as ExpandedField<
  CustomerOrder,
  'agent'
>

// Expanded CustomerOrder.positions
const t08_10_1: Collection<CustomerOrderPosition> = {} as ExpandedField<
  CustomerOrder,
  'positions'
>
const t08_10_2: EntityRef<AssortmentMetaType> = t08_10_1.rows[0].assortment
t08_10_2

// Expanded CustomerOrder.positions.assortment
const t08_11_1 = {} as ExpandedField<
  Collection<CustomerOrderPosition>,
  'assortment'
>
const t08_11_2: AssortmentMetaType = t08_11_1.meta.type

// TODO Что это за тест? Удалить?
// const t80_20_1 = {} as ExpandField<CustomerOrder, 'positions'>
// const t80_20_2: EntityRef<
//   'product' | 'service' | 'bundle' | 'consignment' | 'variant'
// > = ({} as T80_1).positions.rows[0].assortment
// t80_1

// type T80_2 = ExpandPath<T80_1, 'assortment'>

//#endregion

//#region Пустой Expand

const t71: 'foo' = {} as Expand<'foo', undefined>
t71

const t70 = {} as Expand<CustomerOrder, undefined>
t70.shippedSum

const t72 = {} as Expand<Collection<Account>, string | undefined>
t72.rows[0].accountNumber

// @ts-expect-error only string or undefined
const t73 = {} as Expand<Collection<Account>, 42>
t73

//#endregion

//#region Expand не должен затрагивать прочие поля
const t09 = {} as Expand<CustomerOrder, 'agent'>

const agentOwnerMeta: Meta<'employee'> = t09.owner.meta

const agentStateRef: Meta<'state'> | undefined = t09.state?.meta

// @ts-expect-error
t09.state?.name

// @ts-expect-error
t09.project?.id

// @ts-expect-error
t09.positions.rows
//#endregion

//#region Одноуровневый Expand обязательного поля EntityRef
const t10 = {} as Expand<CustomerOrder, 'agent'>

const agentName: string = t10.agent.name // expand

const agentGroup: EntityRef<'group'> = t10.agent.group

// @ts-expect-error
t10.agent.group.name // ERROR: Второй уровен expand не указан
//#endregion

//#region Одноуровневый Expand опционального поля EntityRef
const t11 = {} as Expand<CustomerOrder, 'agentAccount'>

t11.owner.meta

const agentAccount: Account | undefined = t11.agentAccount

const agentAccountName: string | undefined = t11.agentAccount?.bankName

// @ts-expect-error
t11.agent.name
//#endregion

//#region Одноуровневый Expand поля CollectionRef
const t12 = {} as Expand<CustomerOrder, 'positions'>

const orderPosition: CustomerOrderPosition = t12.positions.rows[0]

// @ts-expect-error
t12.positions.rows[0].assortment.id
//#endregion

//#region Одноуровневый Expand поля Array
const t13 = {} as Expand<CustomerOrder, 'attributes'>

const customerOrderAttr = t13.attributes?.[0]

const attrName: string | undefined = customerOrderAttr?.name
attrName

if (customerOrderAttr?.type === AttributeType.File) {
  const attrValue: string = customerOrderAttr.value
  attrValue

  const href: string = customerOrderAttr.download.href
  href
}

if (customerOrderAttr?.type === AttributeType.CustomEntity) {
  const name: string = customerOrderAttr.value.name
  name

  // @ts-expect-error
  customerOrderAttr.download
}

if (customerOrderAttr?.type === AttributeType.Counterparty) {
  const counterpartyRef: EntityRef<'counterparty'> = customerOrderAttr.value

  const counterpartyType: 'counterparty' = counterpartyRef.meta.type

  // @ts-expect-error
  counterpartyRef.name // TODO Проверить: Есть ли тут поле name?

  // @ts-expect-error
  counterpartyRef.id
}
//#endregion

// TODO Test: Одноуровневый Expand опционального поля CollectionRef

//#region Ручной Expand нескольких полей
const t30 = {} as Expand<Expand<CustomerOrder, 'agent'>, 'state'>

t30.owner.meta

t30.agent.name // expand

// @ts-expect-error
t30.agent.group.name // ERROR: no 2-nd level expanded

// @ts-expect-error
t30.project?.id

t30.state?.name
//#endregion

//#region Многоуровневый Expand EntityRef
const t40 = {} as Expand<CustomerOrder, 'agent.group'>

const t40_name: string = t40.agent.group.name // OK: 2-nd level expanded
//#endregion

//#region Многоуровневый Expand CollectionRef
const t41 = {} as Expand<CustomerOrder, 'positions.assortment.country'>

t41.positions

const t41_id: string = t41.positions.rows[0].assortment.id

const t41_asort = t41.positions.rows[0].assortment

if ('country' in t41_asort) {
  const p: string | undefined = t41_asort.country?.id
}
//#endregion

//#region Многоуровневый Expand Array
const t42 = {} as Expand<CustomerOrder, 'attributes.value'>

const customerOrderAttrExpanded = t42.attributes?.[0]

if (customerOrderAttrExpanded?.type === AttributeType.Counterparty) {
  const companyType: CompanyType = customerOrderAttrExpanded.value.companyType
}

if (customerOrderAttrExpanded?.type === AttributeType.Double) {
  const doubleValue: number = customerOrderAttrExpanded.value
}
//#endregion

//#region Expand нескольких полей
const t50 = {} as Expand<CustomerOrder, 'agent.group,state'>

t50.owner.meta

t50.agent.name // expand
t50.agent.code

// @ts-expect-error
t50.project?.id

const t50_name: string | undefined = t50.state?.name

t50.agent.group.name // OK: 2-nd level expanded
//#endregion

//#region Expand attributes.value
// String
const t55_1 = {} as ExpandField<AttributeBase<AttributeType.String>, 'value'>
const t55_2: string = t55_1.value
t55_2

// CustomEntity
const t55_3 = {} as ExpandField<
  AttributeBase<AttributeType.CustomEntity>,
  'value'
>
const t55_4: Entity<'customentity'> = t55_3.value
t55_4.id

const t55_5 = {} as ExpandField<
  AttributeBase<AttributeType.Counterparty>,
  'value'
>
const t55_6: Counterparty = t55_5.value
t55_6.actualAddress

const t55_7 = {} as Expand<CustomerOrder, 'attributes.value'>

const t55_attr = t55_7.attributes?.[0]

if (t55_attr?.type === AttributeType.Counterparty) {
  const t55_val: Counterparty = t55_attr.value
  t55_val.inn
}

if (t55_attr?.type === AttributeType.CustomEntity) {
  const t55_val = t55_attr.value
  const code: string | undefined = t55_val.code
}
//#endregion

//#region Expand deep agent.attributes.value
const t56_1 = {} as Expand<CustomerOrder, 'agent.attributes.value'>
const t56_attr = t56_1.agent.attributes?.[0]

if (typeof t56_attr?.value === 'object') {
  t56_attr.value.id
}

if (t56_attr?.type === AttributeType.Counterparty) {
  t56_attr.value.inn
}
//#endregion

//#region Expand attributes with intersection
const t57_1 = {} as Expand<CustomerOrder, 'agent.attributes.value,agent'>
const t57_attr = t57_1.agent.attributes?.[0]

if (typeof t57_attr?.value === 'object') {
  t57_attr.value.id
}

if (t57_attr?.type === AttributeType.Counterparty) {
  t57_attr.value.inn
}
//#endregion

//#region Expand attributes with deep intersection
const t58_1 = {} as Expand<CustomerOrder, 'agent.attributes.value,agent.state'>
const t58_attr = t58_1.agent.attributes?.[0]

if (t58_attr?.type === AttributeType.Counterparty) {
  t58_attr.value.inn
}
//#endregion

//#region Комплексный Expand
const t60 = {} as Expand<
  CustomerOrder,
  'agent.attributes.value,agent.group,positions.assortment,state'
>

t60.owner.meta

t60.agent.name // expand

// @ts-expect-error: project not expanded
t60.project?.id

const name4: string | undefined = t60.state?.name

t60.agent.group.name // OK: 2-nd level expanded

const t60_agentAttr = t60.agent.attributes?.[0]

// TODO expand: attributes.value
if (t60_agentAttr?.type === AttributeType.Counterparty) {
  const inn: string | undefined = t60_agentAttr.value.inn
}

const t60_assortmentId: string = t60.positions.rows[0].assortment.id

//#endregion

//#region Expand abstract DocumentWithPositions
const t80 = {} as Expand<
  DocumentWithPositions<'supply'>,
  'agent,positions.assortment'
>

t80.agent.name

t80.positions.rows[0].assortment.id
//#endregion

// TODO 'positions.assortment,agent.attributes.value'
// TODO 'attributes.value,agent.attributes.value'
// TODO 'agent,operations,operations.customerOrder'

//#region Expand Metadata
const t90 = {} as Expand<Metadata<'demand'>, 'attributes'>

t90.attributes.meta.href
t90.attributes.rows[0].show
//#endregion
