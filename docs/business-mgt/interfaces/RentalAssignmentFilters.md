[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.53**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / RentalAssignmentFilters

# Interface: RentalAssignmentFilters

Defined in: [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:129](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L129)

Rental assignment filter options.
 RentalAssignmentFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="reservationid"></a> `reservationId?` | `string` | Filter by rental reservation ID | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:131](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L131) |
| <a id="rentalinstanceid"></a> `rentalInstanceId?` | `string` | Filter by rental resource instance ID | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:133](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L133) |
| <a id="status"></a> `status?` | [`RentalAssignmentStatus`](../enumerations/RentalAssignmentStatus.md)[] | Filter by assignment statuses | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:135](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L135) |
| <a id="assignmenttype"></a> `assignmentType?` | [`RentalAssignmentType`](../enumerations/RentalAssignmentType.md) | Filter by assignment lock type | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:137](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L137) |
| <a id="assignedby"></a> `assignedBy?` | `string` | Filter by assigning staff user ID | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:139](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L139) |
| <a id="locationid"></a> `locationId?` | `string` | Filter by business location ID | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:141](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L141) |
| <a id="damagereported"></a> `damageReported?` | `boolean` | Filter assignments where damage was reported | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:143](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L143) |
