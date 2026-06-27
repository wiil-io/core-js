[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.79**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / RoomReAssignment

# Type Alias: RoomReAssignment

```ts
type RoomReAssignment = {
  reservationId: string;
  fromRoomInstanceId?: string | null;
  toRoomInstanceId: string;
  reason?: string | null;
};
```

Defined in: [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:122](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L122)

Schema for reassigning a room reservation to a different room instance.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="reservationid"></a> `reservationId` | `string` | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:108](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L108) |
| <a id="fromroominstanceid"></a> `fromRoomInstanceId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:109](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L109) |
| <a id="toroominstanceid"></a> `toRoomInstanceId` | `string` | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:110](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L110) |
| <a id="reason"></a> `reason?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:111](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L111) |
