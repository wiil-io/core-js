[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / InstructionConfiguration

# Type Alias: InstructionConfiguration

```ts
type InstructionConfiguration = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  instructionName: string;
  role: string;
  introductionMessage: string;
  instructions: string;
  guardrails: string;
  requiredSkills?: string[];
  validationRules?: Record<string, any>;
  serviceId?: string;
  supportedServices: BusinessSupportServices[];
  tools?: string[];
  isTemplate: boolean;
  isPrimary: boolean;
  metadata?: Record<string, any>;
  knowledgeSourceIds: string[];
};
```

Defined in: [src/core/service-configuration/instruction-config.schema.ts:76](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/instruction-config.schema.ts#L76)

Type definition for Instruction Configuration.

Represents a complete instruction configuration including all metadata,
behavioral guidelines, and knowledge sources.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/base.schema.ts#L10) |
| <a id="instructionname"></a> `instructionName` | `string` | [src/core/service-configuration/instruction-config.schema.ts:54](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/instruction-config.schema.ts#L54) |
| <a id="role"></a> `role` | `string` | [src/core/service-configuration/instruction-config.schema.ts:55](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/instruction-config.schema.ts#L55) |
| <a id="introductionmessage"></a> `introductionMessage` | `string` | [src/core/service-configuration/instruction-config.schema.ts:56](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/instruction-config.schema.ts#L56) |
| <a id="instructions"></a> `instructions` | `string` | [src/core/service-configuration/instruction-config.schema.ts:57](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/instruction-config.schema.ts#L57) |
| <a id="guardrails"></a> `guardrails` | `string` | [src/core/service-configuration/instruction-config.schema.ts:58](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/instruction-config.schema.ts#L58) |
| <a id="requiredskills"></a> `requiredSkills?` | `string`[] | [src/core/service-configuration/instruction-config.schema.ts:59](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/instruction-config.schema.ts#L59) |
| <a id="validationrules"></a> `validationRules?` | `Record`\<`string`, `any`\> | [src/core/service-configuration/instruction-config.schema.ts:60](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/instruction-config.schema.ts#L60) |
| <a id="serviceid"></a> `serviceId?` | `string` | [src/core/service-configuration/instruction-config.schema.ts:61](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/instruction-config.schema.ts#L61) |
| <a id="supportedservices"></a> `supportedServices` | [`BusinessSupportServices`](../../type-definitions/enumerations/BusinessSupportServices.md)[] | [src/core/service-configuration/instruction-config.schema.ts:62](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/instruction-config.schema.ts#L62) |
| <a id="tools"></a> `tools?` | `string`[] | [src/core/service-configuration/instruction-config.schema.ts:63](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/instruction-config.schema.ts#L63) |
| <a id="istemplate"></a> `isTemplate` | `boolean` | [src/core/service-configuration/instruction-config.schema.ts:64](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/instruction-config.schema.ts#L64) |
| <a id="isprimary"></a> `isPrimary` | `boolean` | [src/core/service-configuration/instruction-config.schema.ts:65](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/instruction-config.schema.ts#L65) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [src/core/service-configuration/instruction-config.schema.ts:66](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/instruction-config.schema.ts#L66) |
| <a id="knowledgesourceids"></a> `knowledgeSourceIds` | `string`[] | [src/core/service-configuration/instruction-config.schema.ts:67](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/instruction-config.schema.ts#L67) |
