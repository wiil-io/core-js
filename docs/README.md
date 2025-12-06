**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.22**

***

# Wiil Platform JavaScript Data Model Definitions

**Core schemas for the Wiil platform, providing TypeScript types and validation schemas using Zod.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue)](https://www.typescriptlang.org/)
[![Zod](https://img.shields.io/badge/Zod-4.1.12-red)](https://github.com/colinhacks/zod)

## Overview

`wiil-core-js` provides production-ready TypeScript schemas and Zod validation for the WIIL Platform—an AI-powered conversational services platform that enables organizations to deploy intelligent agents across multiple communication channels (voice, chat, SMS, email) to drive business transactions like appointments, reservations, and orders.

This library serves as the single source of truth for data models across the entire WIIL Platform ecosystem, ensuring type safety and runtime validation for:

- **Service Configuration**: AI agent deployment and instruction management
- **Advanced Service Configuration**: Voice processing with STT, TTS, and Speech-to-Speech pipelines
- **Translation Services**: Real-time multilingual voice translation
- **Business Management**: Catalog and transaction management for services, reservations, menus, and products
- **Conversation Management**: Multi-channel conversation handling and message threading

## Key Features

- **Type-Safe Schemas**: Complete TypeScript definitions with Zod runtime validation for all platform entities
- **Comprehensive Platform Coverage**: Schemas spanning four integrated domains (Service Config, Voice Processing, Translation, Business Management)
- **Production-Grade Documentation**: Every schema property includes detailed `.describe()` annotations with architectural context, relationships (1:1, 1:N, N:1), format examples, and use cases
- **Modular Architecture**: Organized into logical domain modules with clear separation of concerns
- **Runtime Validation**: Zod-powered validation ensures data integrity at system boundaries
- **Zero Runtime Dependencies**: Only requires Zod for schema validation—no bloat
- **IDE-Optimized**: Rich JSDoc comments provide inline documentation and IntelliSense support

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
  phone_number: '+15551234567',
  firstname: 'John',
  lastname: 'Doe',
  email: 'john.doe@example.com',
  preferred_language: 'en',
  isValidatedNames: true
});
```

## Platform Architecture

The WIIL Platform integrates four major architectural domains, with Conversations serving as the central integration hub:

```text
┌────────────────────────────────────────────────────────────────┐
│                         ORGANIZATION                            │
│                              │                                  │
│              ┌───────────────┴───────────────┐                  │
│              │                               │                  │
│              ▼                               ▼                  │
│   ┌──────────────────────┐      ┌──────────────────────┐       │
│   │ SERVICE CONFIGURATION│      │  BUSINESS MANAGEMENT │       │
│   │ (Agent Deployment)   │      │  (Catalog Management)│       │
│   └──────────┬───────────┘      └──────────┬───────────┘       │
│              │                             │                   │
│              │                             │                   │
│              └──────────┬──────────────────┘                   │
│                         │                                      │
│                         ▼                                      │
│              ┌──────────────────────┐                          │
│              │   CONVERSATIONS      │◄─── Business Customers   │
│              │ (Integration Hub)    │                          │
│              └──────────┬───────────┘                          │
│                         │                                      │
│                         │ Creates                              │
│                         ▼                                      │
│              ┌──────────────────────┐                          │
│              │    TRANSACTIONS      │                          │
│              │ • Appointments       │                          │
│              │ • Reservations       │                          │
│              │ • Orders             │                          │
│              └──────────────────────┘                          │
└────────────────────────────────────────────────────────────────┘
```

## Module Structure

### Core Domains

#### **1. Account Management** (`core/account`)

Multi-tenant organization and project management.

- `OrganizationSchema` - Root account entity with service status, region, and business vertical configuration
- `ProjectSchema` - Project-level segmentation for team-based access control and deployment organization

#### **2. Service Configuration** (`core/service-configuration`)

Core AI agent deployment system—the heart of agent behavior and multi-channel deployment.

**Instruction & Agent Configuration:**

- `InstructionConfigurationSchema` - **The heart of agent behavior**: system prompts, guidelines, compliance rules, and escalation criteria (1:N relationship with Agent Configurations)
- `AgentConfigurationSchema` - AI agent capabilities, LLM model selection, and operational mode (TEXT, VOICE, MULTI_MODE)

**Deployment & Channels:**

- `DeploymentConfigurationSchema` - Central composition entity combining agent, instruction, and channel configurations
- `InteractionChannelsSchema` - Multi-channel deployment (OTT_CHAT, TELEPHONY_CALL, SMS, EMAIL, WHATSAPP)
- `PhoneConfigurationSchema` - Telephony channel configuration with provider integration
- `PhoneNumberSchema` - Phone number purchase lifecycle and provisioning

**Voice & Translation:**

- `VoiceLanguageSchema` - Voice and language settings for telephony deployments
- `ProvisioningConfigChainSchema` - STT → Agent → TTS processing pipeline configuration
- `CallTransferConfigSchema` - Call routing and escalation to human agents (blind/warm transfers)

**Knowledge & Models:**

- `KnowledgeSchema` - Knowledge source management for agent context (vector stores, file uploads, web scraping)
- `SupportedLLMSchema` - Registry of supported AI models from OpenAI, Anthropic, Google, Meta, etc.

#### **3. Advanced Service Configuration** (Voice Processing)
Voice processing pipelines for Speech-to-Text, Text-to-Speech, and Speech-to-Speech.

- `ProvisioningConfigChainSchema` with `provisioningType`:
  - **DIRECT**: Agent processes interactions directly (text-based channels)
  - **CHAINED**: STT → Agent → TTS pipeline (voice channels)
  - **SPEECH_TO_SPEECH**: Direct voice-to-voice processing (ultra-low latency)

**Supported Providers:**
- **STT**: Deepgram, OpenAI Whisper, Cartesia, Google STT, Azure STT
- **TTS**: ElevenLabs, Cartesia, OpenAI, PlayHT, Google TTS, Azure TTS
- **STS**: Gemini Live, OpenAI Realtime

#### **4. Translation Services** (`core/conversation/translation-*.schema.ts`)

Real-time multilingual voice-to-voice translation.

- `TranslationServiceRequestSchema` - Initiate translation sessions between participants speaking different languages
- `TranslationConversationConfigSchema` - WebRTC connection credentials and channel identifiers
- `TranslationParticipantSchema` - Participant language preferences, authentication tokens, and message history
- `TranslationServiceLogSchema` - Complete translation session record with bidirectional/unidirectional support
- `TranslationMessageSchema` - Individual translation interaction (original text, translated text, languages, timestamps)

#### **5. Conversation Management** (`core/conversation`)

**Conversations** is the central integration hub connecting Service Configuration with Business Management.

- `ServiceConversationConfigSchema` - Complete conversation record linking deployment config, instruction config, customer, channel, and messages
- `ConversationMessageSchema` - Message threading with user/assistant message types (chat and email variants)
- `ConversationSummarySchema` - AI-generated conversation summaries with key points, action items, and sentiment analysis
- `ConversationStateHistorySchema` - Audit trail of status changes (ACTIVE → COMPLETED/TRANSFERRED/ABANDONED)

**Conversation Types:** OTT_CHAT, TELEPHONY_CALL, SMS, EMAIL, WHATSAPP

#### **6. Business Management** (`core/business-mgt`)

Business entity catalogs and transactional operations.

**Customer Management:**

- `CustomerSchema` - Customer records with phone number normalization, language preferences, and contact methods

**Service Catalog:**

- `ServiceConfigSchema` - Bookable services (appointments, consultations, sessions)
- `ServiceAppointmentSchema` - Service appointment scheduling with calendar integration
- `ServicePersonSchema` - Service provider/staff information

**Resource Management:**

- `ReservationResourceSchema` - Reservable assets (tables, rooms, equipment, vehicles)
- `ReservationSchema` - Resource reservation booking and management

**Menu Management:**

- `MenuConfigSchema` - Food/beverage menu structure with categories and items
- `MenuOrderSchema` - Menu-based ordering for restaurants and food service

**Product Catalog:**

- `ProductConfigSchema` - Retail product catalog with categories and inventory
- `ProductOrderSchema` - Product order processing and tracking

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
  businessVerticalId: 'technology',
  serviceStatus: ServiceStatus.ACTIVE,
  platformEmail: 'techstartup@mg.wiil.io',
  metadata: {
    industry: 'SaaS',
    employeeCount: 50
  }
});
```

### Customer Management

```typescript
import { CustomerSchema, CallPriority, PreferredContactMethod } from 'wiil-core-js';

const customer = CustomerSchema.parse({
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
  usesWiilSupportModel: true,
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
