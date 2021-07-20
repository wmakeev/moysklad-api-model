import {
  Account,
  AttributeType,
  CompanyType,
  CustomerOrder,
  CustomerOrderPosition,
  EntityRef,
  Expand,
  Meta
} from '../../../src'

//#region Пустой Expand

const t71: 'foo' = {} as Expand<'foo', undefined>
t71

const t70: CustomerOrder = {} as Expand<CustomerOrder, undefined>
t70

//#endregion

//#region Expand не должен затрагивать прочие поля
const t00 = {} as Expand<CustomerOrder, 'agent'>

const agentOwnerMeta: Meta<'employee'> = t00.owner.meta

const agentStateRef: Meta<'state'> | undefined = t00.state?.meta

// @ts-expect-error
t00.state?.name

// @ts-expect-error
t00.project?.id

// @ts-expect-error
t00.positions.rows
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
const t41 = {} as Expand<CustomerOrder, 'positions.assortment'>

const t41_id: string = t41.positions.rows[0].assortment.id
//#endregion

//#region Многоуровневый Expand Array
const t42 = {} as Expand<CustomerOrder, 'attributes.value'>

const customerOrderAttrExpanded = t42.attributes?.[0]

if (customerOrderAttrExpanded.type === AttributeType.Counterparty) {
  const companyType: CompanyType = customerOrderAttrExpanded.value.companyType
}

if (customerOrderAttrExpanded.type === AttributeType.Double) {
  const doubleValue: number = customerOrderAttrExpanded.value
}
//#endregion

//#region Expand нескольких полей
const t50 = {} as Expand<CustomerOrder, 'agent.group,state'>

t50.owner.meta

t50.agent.name // expand

// @ts-expect-error
t50.project?.id

const t50_name: string | undefined = t50.state?.name

t50.agent.group.name // OK: 2-nd level expanded
//#endregion

//#region Комплексный Expand
const t60 = {} as Expand<
  CustomerOrder,
  'agent.attributes.value,agent.group,positions.assortment,state'
>

t60.owner.meta

t60.agent.name // expand

// @ts-expect-error
t60.project?.id

const name4: string | undefined = t60.state?.name

t60.agent.group.name // OK: 2-nd level expanded

const t60_agentAttr = t60.agent.attributes[0]

if (t60_agentAttr.type === AttributeType.Counterparty) {
  const inn: string | undefined = t60_agentAttr.value.inn
}

const t60_assortmentId: string = t60.positions.rows[0].assortment.id

//#endregion
