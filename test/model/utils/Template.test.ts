import type { CustomerOrder, Template } from '../../../src'

const t1 = {} as Template<CustomerOrder>

// @ts-expect-error
t1.id

t1.agent.meta
