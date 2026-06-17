[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.54**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ChecklistTemplateItem

# Type Alias: ChecklistTemplateItem

```ts
type ChecklistTemplateItem = {
  id: string;
  label: string;
  required: boolean;
  phase: "pickup" | "both" | "return";
};
```

Defined in: [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:207](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L207)

Checklist template item schema.
Defines a pickup or return inspection item used by rental reservations.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:201](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L201) |
| <a id="label"></a> `label` | `string` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:202](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L202) |
| <a id="required"></a> `required` | `boolean` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:203](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L203) |
| <a id="phase"></a> `phase` | `"pickup"` \| `"both"` \| `"return"` | [src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts:204](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/resource/reservation-resource.schema.ts#L204) |
