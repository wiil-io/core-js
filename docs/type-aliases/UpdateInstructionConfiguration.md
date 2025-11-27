[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / UpdateInstructionConfiguration

# Type Alias: UpdateInstructionConfiguration

```ts
type UpdateInstructionConfiguration = {
  version?: number;
  instructionName?: string;
  role?: string;
  organizationId?: string;
  introductionMessage?: string;
  instructions?: string;
  guardrails?: string;
  requiredSkills?: string[];
  validationRules?: Record<string, any>;
  serviceId?: string;
  supportedServices?: BusinessSupportServices[];
  tools?: string[];
  isTemplate?: boolean;
  isPrimary?: boolean;
  metadata?: Record<string, any>;
  knowledgeSourceIds?: string[];
  id: string;
};
```

Defined in: src/core/service-configuration/instruction-config.schema.ts:148

Type definition for updating an existing instruction configuration.

Represents a partial update payload with required id field.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="version"></a> `version?` | `number` | src/core/base.schema.ts:11 |
| <a id="instructionname"></a> `instructionName?` | `string` | src/core/service-configuration/instruction-config.schema.ts:56 |
| <a id="role"></a> `role?` | `string` | src/core/service-configuration/instruction-config.schema.ts:57 |
| <a id="organizationid"></a> `organizationId?` | `string` | src/core/service-configuration/instruction-config.schema.ts:58 |
| <a id="introductionmessage"></a> `introductionMessage?` | `string` | src/core/service-configuration/instruction-config.schema.ts:59 |
| <a id="instructions"></a> `instructions?` | `string` | src/core/service-configuration/instruction-config.schema.ts:60 |
| <a id="guardrails"></a> `guardrails?` | `string` | src/core/service-configuration/instruction-config.schema.ts:61 |
| <a id="requiredskills"></a> `requiredSkills?` | `string`[] | src/core/service-configuration/instruction-config.schema.ts:62 |
| <a id="validationrules"></a> `validationRules?` | `Record`\<`string`, `any`\> | src/core/service-configuration/instruction-config.schema.ts:63 |
| <a id="serviceid"></a> `serviceId?` | `string` | src/core/service-configuration/instruction-config.schema.ts:64 |
| <a id="supportedservices"></a> `supportedServices?` | [`BusinessSupportServices`](../enumerations/BusinessSupportServices.md)[] | src/core/service-configuration/instruction-config.schema.ts:65 |
| <a id="tools"></a> `tools?` | `string`[] | src/core/service-configuration/instruction-config.schema.ts:66 |
| <a id="istemplate"></a> `isTemplate?` | `boolean` | src/core/service-configuration/instruction-config.schema.ts:67 |
| <a id="isprimary"></a> `isPrimary?` | `boolean` | src/core/service-configuration/instruction-config.schema.ts:68 |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | src/core/service-configuration/instruction-config.schema.ts:69 |
| <a id="knowledgesourceids"></a> `knowledgeSourceIds?` | `string`[] | src/core/service-configuration/instruction-config.schema.ts:70 |
| <a id="id"></a> `id` | `string` | src/core/service-configuration/instruction-config.schema.ts:140 |
