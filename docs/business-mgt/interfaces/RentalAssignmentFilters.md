[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.63**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / RentalAssignmentFilters

# Interface: RentalAssignmentFilters

Defined in: [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:109](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L109)

Rental assignment filter options.
 RentalAssignmentFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="reservationid"></a> `reservationId?` | `string` | Filter by rental reservation ID | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:111](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L111) |
| <a id="rentalinstanceid"></a> `rentalInstanceId?` | `string` | Filter by rental resource instance ID | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:113](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L113) |
| <a id="status"></a> `status?` | [`RentalAssignmentStatus`](../enumerations/RentalAssignmentStatus.md)[] | Filter by assignment statuses | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:115](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L115) |
| <a id="assignmenttype"></a> `assignmentType?` | [`RentalAssignmentType`](../enumerations/RentalAssignmentType.md) | Filter by assignment lock type | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:117](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L117) |
| <a id="assignedby"></a> `assignedBy?` | `string` | Filter by assigning staff user ID | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:119](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L119) |
| <a id="locationid"></a> `locationId?` | `string` | Filter by business location ID | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:121](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L121) |
| <a id="damagereported"></a> `damageReported?` | `boolean` | Filter assignments where damage was reported | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:123](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L123) |
