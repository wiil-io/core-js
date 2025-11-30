**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**

***

# Wiil Platform JavaScript Data Model Definitions

**Core schemas for the Wiil platform, providing TypeScript types and validation schemas using Zod.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue)](https://www.typescriptlang.org/)
[![Zod](https://img.shields.io/badge/Zod-4.1.12-red)](https://github.com/colinhacks/zod)

## Overview

`wiil-core-js` is a TypeScript-first data model definition library that provides comprehensive type definitions, validation schemas, and data models. It leverages Zod for runtime type validation and offers complete TypeScript support for type safety across your applications.

## Features

- **Type-Safe Schemas**: Complete TypeScript definitions with Zod runtime validation
- **Comprehensive Coverage**: Schemas for accounts, business management, service configuration, and conversations
- **Modular Architecture**: Organized into logical modules for easy navigation and tree-shaking
- **Production-Ready**: Built with strict TypeScript compiler settings and comprehensive validation
- **Well-Documented**: Extensive JSDoc comments with examples and type information
- **Zero Runtime Dependencies**: Only requires Zod for schema validation

## Installation

```bash
npm install wiil-core-js
```

## Quick Start

```typescript
import {
  OrganizationSchema,
  CustomerSchema,
  AgentConfigurationSchema,
  ServiceStatus
} from 'wiil-core-js';

// Validate and parse organization data
const organization = OrganizationSchema.parse({
  id: 'org-123',
  companyName: 'Acme Corporation',
  primaryRegionId: 'us-west',
  serviceStatus: ServiceStatus.ACTIVE,
  platformEmail: 'admin@acme.com',
  createdAt: Date.now(),
  updatedAt: Date.now()
});

// Validate customer data with automatic phone number normalization
const customer = CustomerSchema.parse({
  organizationId: 'org-123',
  phone_number: '+15551234567',
  firstname: 'John',
  lastname: 'Doe',
  email: 'john.doe@example.com',
  preferred_language: 'en',
  isValidatedNames: true
});
```

## Module Structure

The SDK is organized into the following core modules:

### Core Modules

#### **Account Management** (`core/account`)
- `OrganizationSchema` - Organization/company account management
- `ProjectSchema` - Project configuration and settings
- Service status tracking and audit history

#### **Business Management** (`core/business-mgt`)
- `CustomerSchema` - Customer records and contact information
- `OrderSchema` - Order processing and tracking
- `ProductOrderSchema` - Product-specific order details
- `MenuOrderSchema` - Menu-based ordering (restaurant/food service)
- `ReservationSchema` - Reservation booking and management
- `ReservationResourceSchema` - Resource allocation for reservations
- `ServiceAppointmentSchema` - Service appointment scheduling
- `ServicePersonSchema` - Service provider information
- `MenuConfigSchema` - Menu configuration and items
- `ProductConfigSchema` - Product catalog configuration
- `ServiceConfigSchema` - Service offering configuration

#### **Service Configuration** (`core/service-configuration`)
- `AgentConfigurationSchema` - AI agent configuration and settings
- `CallTransferConfigSchema` - Call routing and transfer logic
- `DeploymentConfigSchema` - Deployment channel configuration
- `InstructionConfigSchema` - Agent instruction and persona settings
- `InteractionChannelsSchema` - Multi-channel deployment (calls, SMS, web, mobile, WhatsApp, email)
- `PhoneNumberSchema` - Phone number provisioning and management
- `VoiceLanguageSchema` - Voice and language settings
- `ProvisioningConfig` - Resource provisioning configuration
- `SupportModelSchema` - Supported LLM model registry

#### **Conversation Management** (`core/conversation`)
- `ConversationConfigSchema` - Conversation settings and preferences
- `ConversationMessageSchema` - Message structure and formatting
- `TranslationConfigSchema` - Translation service configuration
- `TranslationConversationSchema` - Multi-language conversation support

#### **Type Definitions** (`core/type-definitions`)
Comprehensive enumerations and type definitions:
- Service status types (`ServiceStatus`, `ServiceSuspensionType`)
- Deployment types (`DeploymentType`, `DeploymentStatus`)
- Provider types (`ProviderType`)
- LLM and assistant types (`LLMType`, `AssistantType`)
- Business operation types (`CallPriority`, `PreferredContactMethod`, `BestTimeToCall`)

#### **Validators** (`core/validators`)
- `validateDeploymentChannel()` - Deployment channel validation helper
- `getDeploymentChannelType()` - Runtime type checking utilities

#### **Base Schemas** (`core/base`)
- `BaseModelSchema` - Common fields (id, createdAt, updatedAt, version)
- `AddressSchema` - Standardized address validation
- `LanguageCodeSchema` - ISO 639-1/639-2 language codes

### Request Utilities (`request/models`)

#### **Pagination**
- `PaginationMetaSchema` - Pagination metadata structure
- `PaginationRequestSchema` - Standard pagination request parameters
- `SearchablePaginationRequestSchema` - Pagination with search capabilities
- `createPaginatedResultSchema()` - Generic factory for typed paginated results
- `BasePaginatedResultSchema` - Flexible paginated response structure

## Usage Examples

### Organization Management

```typescript
import { OrganizationSchema, ServiceStatus } from 'wiil-core-js';

const organization = OrganizationSchema.parse({
  id: 'org-456',
  companyName: 'Tech Startup Inc',
  primaryRegionId: 'us-east',
  businessVerticalId: 'tech-saas',
  serviceStatus: ServiceStatus.ACTIVE,
  platformEmail: 'techstartup@mg.wiil.io',
  metadata: {
    industry: 'technology',
    employeeCount: 50
  }
});
```

### Customer Management

```typescript
import { CustomerSchema, CallPriority, PreferredContactMethod } from 'wiil-core-js';

const customer = CustomerSchema.parse({
  organizationId: 'org-456',
  phone_number: '15551234567', // Automatically normalized to +15551234567
  firstname: 'Jane',
  lastname: 'Smith',
  email: 'jane.smith@example.com',
  preferred_language: 'en',
  call_priority: CallPriority.HIGH,
  preferred_contact_method: PreferredContactMethod.EMAIL,
  tags: ['vip', 'enterprise'],
  isValidatedNames: true
});
```

### Agent Configuration

```typescript
import {
  AgentConfigurationSchema,
  LLMType,
  AssistantType
} from 'wiil-core-js';

const agentConfig = AgentConfigurationSchema.parse({
  id: 'agent-789',
  modelId: 'gpt-4',
  name: 'Customer Support Agent',
  defaultFunctionState: LLMType.MULTI_MODE,
  usesTravnexSupportModel: true,
  instructionConfigurationId: 'inst-123',
  assistantType: AssistantType.PHONE,
  call_transfer_config: [
    {
      transfer_number: '+15559876543',
      transfer_type: 'warm',
      transfer_conditions: ['billing', 'escalation']
    }
  ],
  metadata: {
    department: 'support',
    region: 'north-america'
  }
});
```

### Pagination

```typescript
import {
  createPaginatedResultSchema,
  CustomerSchema,
  PaginationRequestSchema
} from 'wiil-core-js';

// Create typed paginated schema
const PaginatedCustomers = createPaginatedResultSchema(CustomerSchema);

// Validate paginated response
const customerPage = PaginatedCustomers.parse({
  data: [/* customer objects */],
  meta: {
    page: 1,
    pageSize: 20,
    totalCount: 150,
    totalPages: 8,
    hasNextPage: true,
    hasPreviousPage: false
  }
});

// Validate pagination request
const paginationRequest = PaginationRequestSchema.parse({
  page: 1,
  pageSize: 50,
  sortBy: 'createdAt',
  sortDirection: 'desc'
});
```

### Deployment Channels

```typescript
import {
  DeploymentChannelSchema,
  DeploymentType,
  validateDeploymentChannel
} from 'wiil-core-js';

const webChannel = validateDeploymentChannel({
  deploymentType: DeploymentType.WEB,
  widgetConfig: {
    theme: 'light',
    position: 'bottom-right',
    primaryColor: '#007bff'
  }
});

const callChannel = DeploymentChannelSchema.parse({
  deploymentType: DeploymentType.CALLS,
  phoneNumberConfig: {
    phoneNumber: '+15551234567',
    provider: 'twilio'
  }
});
```

## Development

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd wiil-core-js

# Install dependencies
npm install

# Build the project
npm run build

# Generate documentation
npm run docs
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run build` | Compile TypeScript to JavaScript |
| `npm run watch` | Watch mode for development |
| `npm run docs` | Generate TypeDoc documentation |
| `npm run docs:watch` | Watch mode for documentation |
| `npm run docs:json` | Export documentation as JSON |

## TypeScript Configuration

The project uses strict TypeScript settings:

- `strict: true` - All strict type-checking options enabled
- `esModuleInterop: true` - Better CommonJS/ES module compatibility
- `declaration: true` - Generate .d.ts files
- `skipLibCheck: true` - Faster compilation
- Target: ES2023
- Module: CommonJS

## Documentation

### API Reference

Complete API documentation is available online:

📖 **[View API Documentation](https://github.com/wiil-io/core-js/tree/main/docs)**

The documentation includes:

- Complete type definitions for all schemas
- Property descriptions with types and default values
- Enum values and their meanings
- JSDoc comments with usage examples
- Links to source code for each definition

### IDE IntelliSense

All types include comprehensive JSDoc comments that provide inline documentation in your IDE:

```typescript
import { CustomerSchema } from 'wiil-core-js';

// Hover over CustomerSchema in VS Code to see full documentation
const customer = CustomerSchema.parse({ /* ... */ });
```

### Generate Locally

You can also generate and view the documentation locally:

```bash
npm run docs        # Generate documentation
npm run docs:watch  # Watch mode - regenerate on changes
```

The generated documentation will be available in the `docs/` folder.

## Type Exports

All schemas export both the Zod schema and TypeScript type:

```typescript
import { CustomerSchema } from 'wiil-core-js';
import type { Customer } from 'wiil-core-js';

// Use schema for validation
const validatedCustomer = CustomerSchema.parse(data);

// Use type for TypeScript typing
const customer: Customer = {
  // TypeScript will enforce the structure
};
```

Types are automatically inferred from Zod schemas using `z.infer<typeof Schema>`.

## Validation

All schemas provide runtime validation through Zod:

```typescript
import { OrganizationSchema } from 'wiil-core-js';

try {
  const org = OrganizationSchema.parse(userData);
  // Data is valid and typed
} catch (error) {
  // Handle validation errors
  if (error instanceof z.ZodError) {
    console.error(error.issues);
  }
}

// Safe parsing (returns success/error object)
const result = OrganizationSchema.safeParse(userData);
if (result.success) {
  console.log(result.data);
} else {
  console.error(result.error);
}
```

## Best Practices

1. **Always validate external data**: Use `.parse()` or `.safeParse()` for user input and API responses
2. **Use TypeScript types**: Import types for function parameters and return values
3. **Leverage schema composition**: Extend base schemas for custom requirements
4. **Document custom fields**: Use metadata and custom_fields for extensibility
5. **Handle validation errors**: Implement proper error handling for failed validations

## Contributing

Contributions are welcome! Please ensure:

- All code passes TypeScript compilation (`npm run build`)
- Follow existing code style and documentation patterns
- Add JSDoc comments for new schemas
- Include usage examples for new features

## License

MIT License - see [LICENSE](_media/LICENSE) file for details

## Keywords

- wiil
- data definitions
- data models
- dtos
- schemas
- typescript
- zod
- validation

## Support

For issues, questions, or contributions, please refer to the project repository.

---

**Version**: 0.0.1
**Author**: WIIL

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
