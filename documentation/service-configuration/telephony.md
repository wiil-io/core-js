# Telephony Configuration

This document covers Phone Configuration, Phone Number Purchase, and telephony management schemas for managing phone resources and call handling.

## Table of Contents

1. [Overview](#overview)
2. [PhoneConfiguration](#phoneconfiguration)
3. [PhoneNumberPurchase](#phonenumberpurchase)
4. [PhoneNumberInfo](#phonenumberinfo)
5. [PhoneNumberPricing](#phonenumberpricing)
6. [Enums](#enums)
7. [Relationships](#relationships)
8. [Best Practices](#best-practices)

---

## Overview

The Telephony Configuration system manages phone number resources from various providers:

- **Phone Configuration** - Manages phone number resources and provider integration
- **Phone Number Purchase** - Handles phone acquisition lifecycle
- **Phone Number Info** - Describes available phone numbers from providers
- **Phone Number Pricing** - Pricing information for phone numbers

Supported providers include SignalWire, Twilio, and other SIP/VoIP providers.

---

## PhoneConfiguration

Manages a phone number resource from a telephony provider.

### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| phoneNumber | string | Yes | - | Phone number, short code, or alphanumeric ID |
| providerPhoneNumberId | string | Yes | - | Provider's unique ID for this number |
| phoneRequestId | string | Yes | - | Original request/setup reference |
| friendlyName | string | No | - | Human-readable display name |
| regionId | string | No | - | Provider-specific region identifier |
| monthlyPrice | number | No | - | Monthly recurring cost |
| regionOrCountryName | string | No | - | Human-readable region/country |
| countryCode | string | No | - | ISO 3166-1 alpha-2 country code |
| providerType | enum | Yes | SIGNALWIRE | Telephony provider |
| isImported | boolean | Yes | false | Whether imported from external system |
| status | enum | Yes | INACTIVE | Current operational status |
| isPorted | boolean | Yes | false | Whether ported from another provider |
| markedForRelease | boolean | No | false | Whether marked for disconnection |
| metadata | object | No | - | Provider-specific metadata |
| voiceChannelId | string | No | - | Associated voice channel ID |
| smsChannelId | string | No | - | Associated SMS channel ID |
| voiceChannel | object | No | - | Populated voice channel details |
| smsChannel | object | No | - | Populated SMS channel details |
| isUSSMSPermitted | boolean | Yes | false | US SMS compliance flag |
| createdAt | number | Yes | auto-generated | Creation timestamp |
| updatedAt | number | No | - | Last modification timestamp |

### Example

```json
{
  "id": "phone_config_abc123",
  "phoneNumber": "+12125551234",
  "providerPhoneNumberId": "PN123abc456def",
  "phoneRequestId": "REQ_purchase_789",
  "friendlyName": "Customer Support Main Line",
  "regionId": "us-ny",
  "monthlyPrice": 1.00,
  "regionOrCountryName": "New York, United States",
  "countryCode": "US",
  "providerType": "SIGNALWIRE",
  "isImported": false,
  "status": "ACTIVE",
  "isPorted": false,
  "markedForRelease": false,
  "isUSSMSPermitted": true,
  "voiceChannelId": "channel_voice_001",
  "smsChannelId": "channel_sms_001",
  "metadata": {
    "a2p_campaign_id": "CAMP123",
    "carrier": "T-Mobile"
  },
  "createdAt": 1699900000000,
  "updatedAt": 1699900000000
}
```

### Dual-Channel Phone Example

A single phone number supporting both voice and SMS:

```json
{
  "id": "phone_config_dual",
  "phoneNumber": "+18005559999",
  "providerPhoneNumberId": "PN_toll_free_001",
  "phoneRequestId": "REQ_tf_purchase",
  "friendlyName": "Toll-Free Support",
  "countryCode": "US",
  "providerType": "TWILIO",
  "status": "ACTIVE",
  "isUSSMSPermitted": true,
  "voiceChannelId": "channel_tf_voice",
  "smsChannelId": "channel_tf_sms",
  "voiceChannel": {
    "id": "channel_tf_voice",
    "deploymentType": "CALLS",
    "channelIdentifier": "+18005559999",
    "deployment": {
      "id": "deploy_tf_voice",
      "deploymentName": "Toll-Free Voice Support"
    }
  },
  "smsChannel": {
    "id": "channel_tf_sms",
    "deploymentType": "SMS",
    "channelIdentifier": "+18005559999",
    "deployment": {
      "id": "deploy_tf_sms",
      "deploymentName": "Toll-Free SMS Support"
    }
  }
}
```

---

## PhoneNumberPurchase

Represents a phone number purchase transaction and lifecycle.

### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| friendlyName | string | Yes | - | Human-readable name for the number |
| phoneNumber | string | Yes | - | Phone number in E.164 format |
| countryCode | string | Yes | - | ISO 3166-1 alpha-2 country code (2 chars) |
| chargedCredits | number | Yes | - | Amount charged (positive number) |
| status | enum | Yes | PENDING | Purchase status |
| numberType | enum | Yes | LOCAL | Type of phone number |
| statusDetails | string | No | - | Additional status information |
| completedAt | number | No | - | Completion timestamp |
| metadata | object | No | - | Additional purchase metadata |
| createdAt | number | Yes | auto-generated | Creation timestamp |
| updatedAt | number | No | - | Last modification timestamp |

### Example

```json
{
  "id": "purchase_abc123xyz",
  "friendlyName": "Sales Hotline",
  "phoneNumber": "+12125557890",
  "countryCode": "US",
  "chargedCredits": 1500,
  "status": "COMPLETED",
  "numberType": "LOCAL",
  "statusDetails": "Number provisioned successfully",
  "completedAt": 1699900100000,
  "metadata": {
    "campaign": "q4_expansion",
    "requestedBy": "admin@company.com"
  },
  "createdAt": 1699900000000,
  "updatedAt": 1699900100000
}
```

### Create Purchase Request Example

```json
{
  "friendlyName": "New Support Line",
  "phoneNumber": "+14155551234",
  "countryCode": "US",
  "numberType": "LOCAL"
}
```

### Toll-Free Purchase Example

```json
{
  "friendlyName": "1-800 Customer Service",
  "phoneNumber": "+18005551234",
  "countryCode": "US",
  "numberType": "TOLL_FREE"
}
```

---

## PhoneNumberInfo

Describes available phone numbers from providers.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| friendlyName | string | Yes | Human-readable name |
| phoneNumber | string | Yes | Phone number in E.164 format |
| lata | string | No | Local Access and Transport Area code |
| rateCenter | string | No | Rate center for billing |
| region | string | No | State or province code |
| postalCode | string | No | Associated postal/ZIP code |
| countryCode | string | Yes | ISO country code |
| capabilities | object | Yes | Supported capabilities |
| capabilities.voice | boolean | Yes | Supports voice calls |
| capabilities.SMS | boolean | Yes | Supports SMS |
| capabilities.MMS | boolean | Yes | Supports MMS |
| beta | boolean | Yes | Whether beta/experimental |
| numberType | enum | Yes | Type of phone number |

### Example

```json
{
  "friendlyName": "New York Local",
  "phoneNumber": "+12125551234",
  "lata": "132",
  "rateCenter": "NWYRCYZN01",
  "region": "NY",
  "postalCode": "10001",
  "countryCode": "US",
  "capabilities": {
    "voice": true,
    "SMS": true,
    "MMS": false
  },
  "beta": false,
  "numberType": "LOCAL"
}
```

---

## PhoneNumberPricing

Pricing information for phone numbers.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| number_type | enum | Yes | Type of phone number |
| country | string | Yes | Full country name |
| countryCode | string | Yes | ISO country code |
| phoneNumberPrices | array | Yes | Pricing tiers |
| price | number | Yes | Final price |
| priceUnit | string | Yes | Unit of pricing |
| currency | string | Yes | Currency code (3 chars, default: USD) |

### Example

```json
{
  "number_type": "LOCAL",
  "country": "United States",
  "countryCode": "US",
  "phoneNumberPrices": [
    {
      "base_price": "1.00",
      "current_price": "0.85"
    }
  ],
  "price": 0.85,
  "priceUnit": "per month",
  "currency": "USD"
}
```

---

## Enums

### PhoneStatus

| Value | Description |
|-------|-------------|
| PENDING | Purchase initiated, awaiting provisioning |
| ACTIVE | Operational and ready for deployments |
| INACTIVE | Purchased but not yet activated |
| SUSPENDED | Temporarily disabled |
| RELEASED | Disconnected and returned to provider |

### PhonePurchaseStatus

| Value | Description |
|-------|-------------|
| PENDING | Purchase request submitted |
| PROCESSING | Purchase being processed |
| COMPLETED | Purchase successful, number active |
| FAILED | Purchase failed |
| CANCELLED | Purchase cancelled |

### ProviderType

| Value | Description |
|-------|-------------|
| SIGNALWIRE | SignalWire telephony provider |
| TWILIO | Twilio telephony provider |
| VONAGE | Vonage telephony provider |

### PhoneNumberType

| Value | Description |
|-------|-------------|
| LOCAL | Geographic local number |
| TOLL_FREE | Toll-free number (1-800, etc.) |
| MOBILE | Mobile/cellular number |
| SHORT_CODE | Short code for SMS |

---

## Relationships

```
┌─────────────────────────────────────────────────────────────────────┐
│                   TELEPHONY RELATIONSHIPS                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   ┌──────────────────────────────────────────────────────────┐      │
│   │                  PHONE CONFIGURATION                      │      │
│   │                                                           │      │
│   │   phoneNumber: +12125551234                              │      │
│   │   providerType: SIGNALWIRE                               │      │
│   │   status: ACTIVE                                         │      │
│   │                                                           │      │
│   └──────────────────────────┬───────────────────────────────┘      │
│                              │                                       │
│              ┌───────────────┴───────────────┐                      │
│              │                               │                      │
│              ▼                               ▼                      │
│   ┌──────────────────┐            ┌──────────────────┐             │
│   │  Voice Channel   │            │   SMS Channel    │             │
│   │  (CALLS)         │            │   (SMS)          │             │
│   │                  │            │                  │             │
│   │  channelId: xxx  │            │  channelId: yyy  │             │
│   └────────┬─────────┘            └────────┬─────────┘             │
│            │                               │                        │
│            │ 1:1                           │ 1:1                    │
│            ▼                               ▼                        │
│   ┌──────────────────┐            ┌──────────────────┐             │
│   │   Deployment     │            │   Deployment     │             │
│   │  Configuration   │            │  Configuration   │             │
│   │  (Voice)         │            │  (SMS)           │             │
│   └──────────────────┘            └──────────────────┘             │
│                                                                      │
│                                                                      │
│   PURCHASE FLOW:                                                    │
│                                                                      │
│   ┌──────────────────┐     ┌──────────────────┐                    │
│   │ PhoneNumberInfo  │────►│PhoneNumberPurchase│                    │
│   │ (Available)      │     │ (Transaction)     │                    │
│   └──────────────────┘     └─────────┬────────┘                    │
│                                      │                              │
│                                      │ creates                      │
│                                      ▼                              │
│                            ┌──────────────────┐                    │
│                            │PhoneConfiguration│                    │
│                            │ (Resource)       │                    │
│                            └──────────────────┘                    │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Key Relationships

| From | To | Relationship | Description |
|------|----|--------------|-------------|
| PhoneConfiguration | DeploymentChannel (Voice) | 1:1 | One phone can have one voice channel |
| PhoneConfiguration | DeploymentChannel (SMS) | 1:1 | Same phone can also have one SMS channel |
| PhoneNumberPurchase | PhoneConfiguration | 1:1 | Purchase creates a phone config |
| DeploymentChannel | PhoneConfiguration | N:1 | Channels reference phone configs |

---

## Best Practices

### Phone Configuration

1. **Use friendly names** - Set descriptive friendlyName for easy identification.

2. **Track both channels** - A single phone number can serve both voice and SMS; track both channel IDs.

3. **Monitor status** - Implement alerts for status changes, especially SUSPENDED or RELEASED.

4. **Maintain metadata** - Store provider-specific details and compliance info in metadata.

### Phone Purchase

5. **Verify capabilities** - Check voice/SMS/MMS capabilities before purchasing.

6. **Use correct number type** - Match numberType to use case (LOCAL for regional, TOLL_FREE for national).

7. **Handle failures gracefully** - Implement retry logic for FAILED purchases.

8. **Track completedAt** - Use completion timestamp for billing and audit purposes.

### Provider Management

9. **Use consistent providers** - Standardize on one provider per region when possible.

10. **Handle ported numbers** - Set isPorted correctly for numbers moved from other providers.

11. **Plan for release** - Use markedForRelease to schedule number disconnection.

### Compliance

12. **Enable US SMS compliance** - Set isUSSMSPermitted for A2P 10DLC registration.

13. **Record interactions** - Enable recording in channels for compliance and QA.

14. **Document regional requirements** - Different regions have different telephony regulations.

---

## Quick Reference

### Phone Status Lifecycle

```
Purchase ──► PENDING ──► INACTIVE ──► ACTIVE
                              │          │
                              │          ▼
                              │      SUSPENDED
                              │          │
                              └──────────┴──► RELEASED
```

### Purchase Status Flow

```
PENDING ──► PROCESSING ──► COMPLETED
     │                         │
     └──► CANCELLED            └──► Creates PhoneConfiguration
     │
     └──► FAILED
```

### Channel Configuration

| Channel Type | Requires | Optional |
|--------------|----------|----------|
| CALLS | phoneConfigurationId | forwardingPhoneNumber |
| SMS | phoneConfigurationId | - |

### Number Types by Use Case

| Use Case | Number Type | Example |
|----------|-------------|---------|
| Local support | LOCAL | +1 (212) 555-1234 |
| National toll-free | TOLL_FREE | +1 (800) 555-1234 |
| SMS campaigns | SHORT_CODE | 12345 |
| Mobile outreach | MOBILE | +1 (555) 123-4567 |
