**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.61**

***

# Wiil Core JS

Public schema definitions for WIIL Platform REST API resources and SDKs.

This package exposes Zod schemas, inferred TypeScript types, and request utility
models used by WIIL services and generated client SDKs. The source of truth lives
under `src/core`; the public API examples and resource guides live under
`documentation`.

## Package

- Package name: `wiil-core-js`
- Runtime format: CommonJS
- Validation library: `zod`
- Main entrypoint: `dist/index.js`
- Type declarations: `dist/index.d.ts`

## What This Package Contains

### Core Schemas

`src/core` is the central schema surface.

| Area | Purpose |
| --- | --- |
| `account` | Organizations, projects, and supported business verticals |
| `assistant-setups` | Assistant setup definitions |
| `business-mgt` | Business catalog, customer, order, booking, reservation, and pricing resources |
| `conversation` | Conversation configs, messages, translation, outbound calls, email, SMS, and templates |
| `service-configuration` | Agent, instruction, deployment, channel, voice, telephony, knowledge, and dynamic setup schemas |
| `type-definitions` | Shared enums, dynamic field definitions, and reusable type primitives |
| `validators` | Shared validation helpers |
| `base.schema.ts` | Base model, address, phone number, and language code schemas |

The root package exports `src/core` and `src/request`.

```ts
import {
  BusinessLocationSchema,
  CreateCustomerGroupSchema,
  DeploymentConfigurationSchema,
} from "wiil-core-js";
```

## Business Management Domains

The `business-mgt` module exports shared business resources and domain-specific
catalog models.

| Domain | Examples |
| --- | --- |
| Shared business resources | Business locations, tax rules, discount rules, orders, pricing rules, booking primitives |
| Customer management | Customers, customer groups, shipping addresses |
| Service management | Service categories, service configs, providers, appointments, slot queries, pricing rules |
| Reservation management | Resource catalogs, floor plans, sections, table/room/rental reservations, assignments, settings, slot queries |
| Menu management | Menu categories, menu items, variants, modifiers, menu sets, menu pricing rules, menu orders |
| Product management | Product categories, products, variants, axes, product sets, pricing rules, product orders |
| Property management | Property catalog resources |

## Documentation

The `documentation` folder contains the public REST and SDK-facing resource
guides. Request and response examples in these files are represented as JSON,
not TypeScript implementation snippets.

| Documentation Area | Files |
| --- | --- |
| Catalog overview | `documentation/catalog/*.md` |
| Business locations | `documentation/catalog/business-location.md` |
| Customer management | `documentation/catalog/customer-management.md` |
| Menu ordering | `documentation/catalog/menu-order-management/*.md` |
| Product ordering | `documentation/catalog/product-order-management/*.md` |
| Reservation management | `documentation/catalog/reservation-management/*.md` |
| Service appointments | `documentation/catalog/service-appointment-management/*.md` |
| Service configuration | `documentation/service-configuration/*.md` |
| Conversation and communication | `documentation/service-conversation.md`, `documentation/communication-request.md`, `documentation/translation-*.md` |
| Shared pricing resources | `documentation/tax-rule.md`, `documentation/discount-rule.md` |

## Runtime JSON Payloads

API payloads are plain JSON. The schemas in this package validate those payloads
and provide SDK type inference.

```json
{
  "name": "Downtown Branch",
  "code": "DTWN",
  "status": "ACTIVE",
  "isPrimary": true,
  "timezone": "America/New_York",
  "businessHours": {
    "1": {
      "isOpen": true,
      "startTime": "09:00",
      "endTime": "17:00"
    }
  },
  "phoneNumber": "+15551234567",
  "email": "downtown@example.com",
  "coordinates": {
    "latitude": 39.7817,
    "longitude": -89.6501
  }
}
```

## TypeScript Consumers

Consumers can parse, validate, and infer types from the exported schemas.

```ts
import { BusinessLocationSchema, type BusinessLocation } from "wiil-core-js";

const result = BusinessLocationSchema.safeParse({
  id: "loc_downtown",
  name: "Downtown Branch",
  status: "ACTIVE",
  isPrimary: true,
  businessHours: {
    "1": {
      isOpen: true,
      startTime: "09:00",
      endTime: "17:00",
    },
  },
});

if (result.success) {
  const location: BusinessLocation = result.data;
}
```

## Schema Conventions

- Complete resource schemas generally extend `BaseModelSchema`, which provides
  `id`, `createdAt`, and `updatedAt`.
- Create schemas omit system-managed fields.
- Update schemas are partial create schemas with a required `id`.
- Public documentation examples use JSON request and response payloads.
- Type definitions should be read from the source schemas rather than assumed.

## Development

Install dependencies:

```bash
npm install
```

Build the package:

```bash
npm run build
```

Generate API reference documentation:

```bash
npm run docs
```

There is no application server required for this package. It is a schema and
type-definition library.

## Repository Map

```text
src/
  index.ts                  Package entrypoint
  core/                     Public schema definitions
  request/                  Request and pagination utility models
documentation/              Public JSON examples and resource guides
docs/                       Generated TypeDoc output
```

## Modules

| Module | Description |
| ------ | ------ |
| [account](account/README.md) | - |
| [business-mgt](business-mgt/README.md) | - |
| [conversation](conversation/README.md) | - |
| [service-configuration](service-configuration/README.md) | - |
| [type-definitions](type-definitions/README.md) | - |
| [validators](validators/README.md) | - |
| [request](request/README.md) | - |
