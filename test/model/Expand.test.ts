import type { CustomerOrder, Expand } from '../../src'

// Expand EntityRef
const test1 = {} as Expand<Expand<CustomerOrder, 'agent'>, 'state'>

test1.owner.meta
test1.agent.name // expand
// @ts-expect-error
test1.agent.group.name // ERROR: no 2-nd level expanded
// @ts-expect-error
test1.project?.id

test1.state?.name

const test2 = {} as Expand<CustomerOrder, 'agent.group'>

test2.agent.group.name // OK: 2-nd level expanded
