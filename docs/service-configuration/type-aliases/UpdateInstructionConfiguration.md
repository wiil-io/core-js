[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.27**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / UpdateInstructionConfiguration

# Type Alias: UpdateInstructionConfiguration

```ts
type UpdateInstructionConfiguration = {
  instructionName?: string;
  role?: string;
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

Defined in: [src/core/service-configuration/instruction-config.schema.ts:163](https://github.com/wiil-io/core-js/blob/4a6a8849502ba7a59ffc90a6343c4d70c3487085/src/core/service-configuration/instruction-config.schema.ts#L163)

Type definition for updating an existing instruction configuration.

Represents a partial update payload with required id field.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="instructionname"></a> `instructionName?` | `string` | [src/core/service-configuration/instruction-config.schema.ts:73](https://github.com/wiil-io/core-js/blob/4a6a8849502ba7a59ffc90a6343c4d70c3487085/src/core/service-configuration/instruction-config.schema.ts#L73) |
| <a id="role"></a> `role?` | `string` | [src/core/service-configuration/instruction-config.schema.ts:74](https://github.com/wiil-io/core-js/blob/4a6a8849502ba7a59ffc90a6343c4d70c3487085/src/core/service-configuration/instruction-config.schema.ts#L74) |
| <a id="introductionmessage"></a> `introductionMessage?` | `string` | [src/core/service-configuration/instruction-config.schema.ts:75](https://github.com/wiil-io/core-js/blob/4a6a8849502ba7a59ffc90a6343c4d70c3487085/src/core/service-configuration/instruction-config.schema.ts#L75) |
| <a id="instructions"></a> `instructions?` | `string` | [src/core/service-configuration/instruction-config.schema.ts:76](https://github.com/wiil-io/core-js/blob/4a6a8849502ba7a59ffc90a6343c4d70c3487085/src/core/service-configuration/instruction-config.schema.ts#L76) |
| <a id="guardrails"></a> `guardrails?` | `string` | [src/core/service-configuration/instruction-config.schema.ts:77](https://github.com/wiil-io/core-js/blob/4a6a8849502ba7a59ffc90a6343c4d70c3487085/src/core/service-configuration/instruction-config.schema.ts#L77) |
| <a id="requiredskills"></a> `requiredSkills?` | `string`[] | [src/core/service-configuration/instruction-config.schema.ts:78](https://github.com/wiil-io/core-js/blob/4a6a8849502ba7a59ffc90a6343c4d70c3487085/src/core/service-configuration/instruction-config.schema.ts#L78) |
| <a id="validationrules"></a> `validationRules?` | `Record`\<`string`, `any`\> | [src/core/service-configuration/instruction-config.schema.ts:79](https://github.com/wiil-io/core-js/blob/4a6a8849502ba7a59ffc90a6343c4d70c3487085/src/core/service-configuration/instruction-config.schema.ts#L79) |
| <a id="serviceid"></a> `serviceId?` | `string` | [src/core/service-configuration/instruction-config.schema.ts:80](https://github.com/wiil-io/core-js/blob/4a6a8849502ba7a59ffc90a6343c4d70c3487085/src/core/service-configuration/instruction-config.schema.ts#L80) |
| <a id="supportedservices"></a> `supportedServices?` | [`BusinessSupportServices`](../../type-definitions/enumerations/BusinessSupportServices.md)[] | [src/core/service-configuration/instruction-config.schema.ts:81](https://github.com/wiil-io/core-js/blob/4a6a8849502ba7a59ffc90a6343c4d70c3487085/src/core/service-configuration/instruction-config.schema.ts#L81) |
| <a id="tools"></a> `tools?` | `string`[] | [src/core/service-configuration/instruction-config.schema.ts:82](https://github.com/wiil-io/core-js/blob/4a6a8849502ba7a59ffc90a6343c4d70c3487085/src/core/service-configuration/instruction-config.schema.ts#L82) |
| <a id="istemplate"></a> `isTemplate?` | `boolean` | [src/core/service-configuration/instruction-config.schema.ts:83](https://github.com/wiil-io/core-js/blob/4a6a8849502ba7a59ffc90a6343c4d70c3487085/src/core/service-configuration/instruction-config.schema.ts#L83) |
| <a id="isprimary"></a> `isPrimary?` | `boolean` | [src/core/service-configuration/instruction-config.schema.ts:84](https://github.com/wiil-io/core-js/blob/4a6a8849502ba7a59ffc90a6343c4d70c3487085/src/core/service-configuration/instruction-config.schema.ts#L84) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [src/core/service-configuration/instruction-config.schema.ts:85](https://github.com/wiil-io/core-js/blob/4a6a8849502ba7a59ffc90a6343c4d70c3487085/src/core/service-configuration/instruction-config.schema.ts#L85) |
| <a id="knowledgesourceids"></a> `knowledgeSourceIds?` | `string`[] | [src/core/service-configuration/instruction-config.schema.ts:86](https://github.com/wiil-io/core-js/blob/4a6a8849502ba7a59ffc90a6343c4d70c3487085/src/core/service-configuration/instruction-config.schema.ts#L86) |
| <a id="id"></a> `id` | `string` | [src/core/service-configuration/instruction-config.schema.ts:155](https://github.com/wiil-io/core-js/blob/4a6a8849502ba7a59ffc90a6343c4d70c3487085/src/core/service-configuration/instruction-config.schema.ts#L155) |
