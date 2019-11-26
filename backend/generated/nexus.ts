/**
 * This file was automatically generated by Nexus 0.11.6
 * Do not make changes to this file directly
 */

import * as ctx from "../context"
import * as prisma from "./prisma-client/index"
import { core } from "nexus"
declare global {
  interface NexusGenCustomDefinitionMethods<TypeName extends string> {
    upload<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Upload";
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  AdressWhereInput: { // input type
    AND?: NexusGenInputs['AdressWhereInput'][] | null; // [AdressWhereInput!]
    city?: string | null; // String
    city_contains?: string | null; // String
    city_ends_with?: string | null; // String
    city_gt?: string | null; // String
    city_gte?: string | null; // String
    city_in?: string[] | null; // [String!]
    city_lt?: string | null; // String
    city_lte?: string | null; // String
    city_not?: string | null; // String
    city_not_contains?: string | null; // String
    city_not_ends_with?: string | null; // String
    city_not_in?: string[] | null; // [String!]
    city_not_starts_with?: string | null; // String
    city_starts_with?: string | null; // String
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    NOT?: NexusGenInputs['AdressWhereInput'][] | null; // [AdressWhereInput!]
    OR?: NexusGenInputs['AdressWhereInput'][] | null; // [AdressWhereInput!]
    postalCode?: string | null; // String
    postalCode_contains?: string | null; // String
    postalCode_ends_with?: string | null; // String
    postalCode_gt?: string | null; // String
    postalCode_gte?: string | null; // String
    postalCode_in?: string[] | null; // [String!]
    postalCode_lt?: string | null; // String
    postalCode_lte?: string | null; // String
    postalCode_not?: string | null; // String
    postalCode_not_contains?: string | null; // String
    postalCode_not_ends_with?: string | null; // String
    postalCode_not_in?: string[] | null; // [String!]
    postalCode_not_starts_with?: string | null; // String
    postalCode_starts_with?: string | null; // String
    street?: string | null; // String
    street_contains?: string | null; // String
    street_ends_with?: string | null; // String
    street_gt?: string | null; // String
    street_gte?: string | null; // String
    street_in?: string[] | null; // [String!]
    street_lt?: string | null; // String
    street_lte?: string | null; // String
    street_not?: string | null; // String
    street_not_contains?: string | null; // String
    street_not_ends_with?: string | null; // String
    street_not_in?: string[] | null; // [String!]
    street_not_starts_with?: string | null; // String
    street_starts_with?: string | null; // String
  }
  FileWhereInput: { // input type
    AND?: NexusGenInputs['FileWhereInput'][] | null; // [FileWhereInput!]
    encoding?: string | null; // String
    encoding_contains?: string | null; // String
    encoding_ends_with?: string | null; // String
    encoding_gt?: string | null; // String
    encoding_gte?: string | null; // String
    encoding_in?: string[] | null; // [String!]
    encoding_lt?: string | null; // String
    encoding_lte?: string | null; // String
    encoding_not?: string | null; // String
    encoding_not_contains?: string | null; // String
    encoding_not_ends_with?: string | null; // String
    encoding_not_in?: string[] | null; // [String!]
    encoding_not_starts_with?: string | null; // String
    encoding_starts_with?: string | null; // String
    fileName?: string | null; // String
    fileName_contains?: string | null; // String
    fileName_ends_with?: string | null; // String
    fileName_gt?: string | null; // String
    fileName_gte?: string | null; // String
    fileName_in?: string[] | null; // [String!]
    fileName_lt?: string | null; // String
    fileName_lte?: string | null; // String
    fileName_not?: string | null; // String
    fileName_not_contains?: string | null; // String
    fileName_not_ends_with?: string | null; // String
    fileName_not_in?: string[] | null; // [String!]
    fileName_not_starts_with?: string | null; // String
    fileName_starts_with?: string | null; // String
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    key?: string | null; // String
    key_contains?: string | null; // String
    key_ends_with?: string | null; // String
    key_gt?: string | null; // String
    key_gte?: string | null; // String
    key_in?: string[] | null; // [String!]
    key_lt?: string | null; // String
    key_lte?: string | null; // String
    key_not?: string | null; // String
    key_not_contains?: string | null; // String
    key_not_ends_with?: string | null; // String
    key_not_in?: string[] | null; // [String!]
    key_not_starts_with?: string | null; // String
    key_starts_with?: string | null; // String
    mimeType?: string | null; // String
    mimeType_contains?: string | null; // String
    mimeType_ends_with?: string | null; // String
    mimeType_gt?: string | null; // String
    mimeType_gte?: string | null; // String
    mimeType_in?: string[] | null; // [String!]
    mimeType_lt?: string | null; // String
    mimeType_lte?: string | null; // String
    mimeType_not?: string | null; // String
    mimeType_not_contains?: string | null; // String
    mimeType_not_ends_with?: string | null; // String
    mimeType_not_in?: string[] | null; // [String!]
    mimeType_not_starts_with?: string | null; // String
    mimeType_starts_with?: string | null; // String
    NOT?: NexusGenInputs['FileWhereInput'][] | null; // [FileWhereInput!]
    OR?: NexusGenInputs['FileWhereInput'][] | null; // [FileWhereInput!]
    url?: string | null; // String
    url_contains?: string | null; // String
    url_ends_with?: string | null; // String
    url_gt?: string | null; // String
    url_gte?: string | null; // String
    url_in?: string[] | null; // [String!]
    url_lt?: string | null; // String
    url_lte?: string | null; // String
    url_not?: string | null; // String
    url_not_contains?: string | null; // String
    url_not_ends_with?: string | null; // String
    url_not_in?: string[] | null; // [String!]
    url_not_starts_with?: string | null; // String
    url_starts_with?: string | null; // String
  }
  OfferWhereInput: { // input type
    active?: boolean | null; // Boolean
    active_not?: boolean | null; // Boolean
    amount?: number | null; // Int
    amount_gt?: number | null; // Int
    amount_gte?: number | null; // Int
    amount_in?: number[] | null; // [Int!]
    amount_lt?: number | null; // Int
    amount_lte?: number | null; // Int
    amount_not?: number | null; // Int
    amount_not_in?: number[] | null; // [Int!]
    AND?: NexusGenInputs['OfferWhereInput'][] | null; // [OfferWhereInput!]
    beneficator?: NexusGenInputs['OrganizationWhereInput'] | null; // OrganizationWhereInput
    createdAt?: any | null; // DateTime
    createdAt_gt?: any | null; // DateTime
    createdAt_gte?: any | null; // DateTime
    createdAt_in?: any[] | null; // [DateTime!]
    createdAt_lt?: any | null; // DateTime
    createdAt_lte?: any | null; // DateTime
    createdAt_not?: any | null; // DateTime
    createdAt_not_in?: any[] | null; // [DateTime!]
    deletedAt?: any | null; // DateTime
    deletedAt_gt?: any | null; // DateTime
    deletedAt_gte?: any | null; // DateTime
    deletedAt_in?: any[] | null; // [DateTime!]
    deletedAt_lt?: any | null; // DateTime
    deletedAt_lte?: any | null; // DateTime
    deletedAt_not?: any | null; // DateTime
    deletedAt_not_in?: any[] | null; // [DateTime!]
    email?: string | null; // String
    email_contains?: string | null; // String
    email_ends_with?: string | null; // String
    email_gt?: string | null; // String
    email_gte?: string | null; // String
    email_in?: string[] | null; // [String!]
    email_lt?: string | null; // String
    email_lte?: string | null; // String
    email_not?: string | null; // String
    email_not_contains?: string | null; // String
    email_not_ends_with?: string | null; // String
    email_not_in?: string[] | null; // [String!]
    email_not_starts_with?: string | null; // String
    email_starts_with?: string | null; // String
    firstName?: string | null; // String
    firstName_contains?: string | null; // String
    firstName_ends_with?: string | null; // String
    firstName_gt?: string | null; // String
    firstName_gte?: string | null; // String
    firstName_in?: string[] | null; // [String!]
    firstName_lt?: string | null; // String
    firstName_lte?: string | null; // String
    firstName_not?: string | null; // String
    firstName_not_contains?: string | null; // String
    firstName_not_ends_with?: string | null; // String
    firstName_not_in?: string[] | null; // [String!]
    firstName_not_starts_with?: string | null; // String
    firstName_starts_with?: string | null; // String
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    lastName?: string | null; // String
    lastName_contains?: string | null; // String
    lastName_ends_with?: string | null; // String
    lastName_gt?: string | null; // String
    lastName_gte?: string | null; // String
    lastName_in?: string[] | null; // [String!]
    lastName_lt?: string | null; // String
    lastName_lte?: string | null; // String
    lastName_not?: string | null; // String
    lastName_not_contains?: string | null; // String
    lastName_not_ends_with?: string | null; // String
    lastName_not_in?: string[] | null; // [String!]
    lastName_not_starts_with?: string | null; // String
    lastName_starts_with?: string | null; // String
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['OfferWhereInput'][] | null; // [OfferWhereInput!]
    OR?: NexusGenInputs['OfferWhereInput'][] | null; // [OfferWhereInput!]
    price?: number | null; // Int
    price_gt?: number | null; // Int
    price_gte?: number | null; // Int
    price_in?: number[] | null; // [Int!]
    price_lt?: number | null; // Int
    price_lte?: number | null; // Int
    price_not?: number | null; // Int
    price_not_in?: number[] | null; // [Int!]
    transactions_every?: NexusGenInputs['TransactionWhereInput'] | null; // TransactionWhereInput
    transactions_none?: NexusGenInputs['TransactionWhereInput'] | null; // TransactionWhereInput
    transactions_some?: NexusGenInputs['TransactionWhereInput'] | null; // TransactionWhereInput
    updatedAt?: any | null; // DateTime
    updatedAt_gt?: any | null; // DateTime
    updatedAt_gte?: any | null; // DateTime
    updatedAt_in?: any[] | null; // [DateTime!]
    updatedAt_lt?: any | null; // DateTime
    updatedAt_lte?: any | null; // DateTime
    updatedAt_not?: any | null; // DateTime
    updatedAt_not_in?: any[] | null; // [DateTime!]
    user?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
  }
  OrganizationWhereInput: { // input type
    active?: boolean | null; // Boolean
    active_not?: boolean | null; // Boolean
    AND?: NexusGenInputs['OrganizationWhereInput'][] | null; // [OrganizationWhereInput!]
    apiId?: number | null; // Int
    apiId_gt?: number | null; // Int
    apiId_gte?: number | null; // Int
    apiId_in?: number[] | null; // [Int!]
    apiId_lt?: number | null; // Int
    apiId_lte?: number | null; // Int
    apiId_not?: number | null; // Int
    apiId_not_in?: number[] | null; // [Int!]
    apiSecret?: string | null; // String
    apiSecret_contains?: string | null; // String
    apiSecret_ends_with?: string | null; // String
    apiSecret_gt?: string | null; // String
    apiSecret_gte?: string | null; // String
    apiSecret_in?: string[] | null; // [String!]
    apiSecret_lt?: string | null; // String
    apiSecret_lte?: string | null; // String
    apiSecret_not?: string | null; // String
    apiSecret_not_contains?: string | null; // String
    apiSecret_not_ends_with?: string | null; // String
    apiSecret_not_in?: string[] | null; // [String!]
    apiSecret_not_starts_with?: string | null; // String
    apiSecret_starts_with?: string | null; // String
    createdAt?: any | null; // DateTime
    createdAt_gt?: any | null; // DateTime
    createdAt_gte?: any | null; // DateTime
    createdAt_in?: any[] | null; // [DateTime!]
    createdAt_lt?: any | null; // DateTime
    createdAt_lte?: any | null; // DateTime
    createdAt_not?: any | null; // DateTime
    createdAt_not_in?: any[] | null; // [DateTime!]
    deletedAt?: any | null; // DateTime
    deletedAt_gt?: any | null; // DateTime
    deletedAt_gte?: any | null; // DateTime
    deletedAt_in?: any[] | null; // [DateTime!]
    deletedAt_lt?: any | null; // DateTime
    deletedAt_lte?: any | null; // DateTime
    deletedAt_not?: any | null; // DateTime
    deletedAt_not_in?: any[] | null; // [DateTime!]
    description?: string | null; // String
    description_contains?: string | null; // String
    description_ends_with?: string | null; // String
    description_gt?: string | null; // String
    description_gte?: string | null; // String
    description_in?: string[] | null; // [String!]
    description_lt?: string | null; // String
    description_lte?: string | null; // String
    description_not?: string | null; // String
    description_not_contains?: string | null; // String
    description_not_ends_with?: string | null; // String
    description_not_in?: string[] | null; // [String!]
    description_not_starts_with?: string | null; // String
    description_starts_with?: string | null; // String
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    logo?: NexusGenInputs['FileWhereInput'] | null; // FileWhereInput
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['OrganizationWhereInput'][] | null; // [OrganizationWhereInput!]
    offers_every?: NexusGenInputs['OfferWhereInput'] | null; // OfferWhereInput
    offers_none?: NexusGenInputs['OfferWhereInput'] | null; // OfferWhereInput
    offers_some?: NexusGenInputs['OfferWhereInput'] | null; // OfferWhereInput
    OR?: NexusGenInputs['OrganizationWhereInput'][] | null; // [OrganizationWhereInput!]
    organizationId?: number | null; // Int
    organizationId_gt?: number | null; // Int
    organizationId_gte?: number | null; // Int
    organizationId_in?: number[] | null; // [Int!]
    organizationId_lt?: number | null; // Int
    organizationId_lte?: number | null; // Int
    organizationId_not?: number | null; // Int
    organizationId_not_in?: number[] | null; // [Int!]
    updatedAt?: any | null; // DateTime
    updatedAt_gt?: any | null; // DateTime
    updatedAt_gte?: any | null; // DateTime
    updatedAt_in?: any[] | null; // [DateTime!]
    updatedAt_lt?: any | null; // DateTime
    updatedAt_lte?: any | null; // DateTime
    updatedAt_not?: any | null; // DateTime
    updatedAt_not_in?: any[] | null; // [DateTime!]
    url?: string | null; // String
    url_contains?: string | null; // String
    url_ends_with?: string | null; // String
    url_gt?: string | null; // String
    url_gte?: string | null; // String
    url_in?: string[] | null; // [String!]
    url_lt?: string | null; // String
    url_lte?: string | null; // String
    url_not?: string | null; // String
    url_not_contains?: string | null; // String
    url_not_ends_with?: string | null; // String
    url_not_in?: string[] | null; // [String!]
    url_not_starts_with?: string | null; // String
    url_starts_with?: string | null; // String
  }
  OrganizationWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  TransactionWhereInput: { // input type
    amount?: number | null; // Int
    amount_gt?: number | null; // Int
    amount_gte?: number | null; // Int
    amount_in?: number[] | null; // [Int!]
    amount_lt?: number | null; // Int
    amount_lte?: number | null; // Int
    amount_not?: number | null; // Int
    amount_not_in?: number[] | null; // [Int!]
    AND?: NexusGenInputs['TransactionWhereInput'][] | null; // [TransactionWhereInput!]
    comment?: string | null; // String
    comment_contains?: string | null; // String
    comment_ends_with?: string | null; // String
    comment_gt?: string | null; // String
    comment_gte?: string | null; // String
    comment_in?: string[] | null; // [String!]
    comment_lt?: string | null; // String
    comment_lte?: string | null; // String
    comment_not?: string | null; // String
    comment_not_contains?: string | null; // String
    comment_not_ends_with?: string | null; // String
    comment_not_in?: string[] | null; // [String!]
    comment_not_starts_with?: string | null; // String
    comment_starts_with?: string | null; // String
    createdAt?: any | null; // DateTime
    createdAt_gt?: any | null; // DateTime
    createdAt_gte?: any | null; // DateTime
    createdAt_in?: any[] | null; // [DateTime!]
    createdAt_lt?: any | null; // DateTime
    createdAt_lte?: any | null; // DateTime
    createdAt_not?: any | null; // DateTime
    createdAt_not_in?: any[] | null; // [DateTime!]
    deletedAt?: any | null; // DateTime
    deletedAt_gt?: any | null; // DateTime
    deletedAt_gte?: any | null; // DateTime
    deletedAt_in?: any[] | null; // [DateTime!]
    deletedAt_lt?: any | null; // DateTime
    deletedAt_lte?: any | null; // DateTime
    deletedAt_not?: any | null; // DateTime
    deletedAt_not_in?: any[] | null; // [DateTime!]
    donatedAmount?: number | null; // Int
    donatedAmount_gt?: number | null; // Int
    donatedAmount_gte?: number | null; // Int
    donatedAmount_in?: number[] | null; // [Int!]
    donatedAmount_lt?: number | null; // Int
    donatedAmount_lte?: number | null; // Int
    donatedAmount_not?: number | null; // Int
    donatedAmount_not_in?: number[] | null; // [Int!]
    email?: string | null; // String
    email_contains?: string | null; // String
    email_ends_with?: string | null; // String
    email_gt?: string | null; // String
    email_gte?: string | null; // String
    email_in?: string[] | null; // [String!]
    email_lt?: string | null; // String
    email_lte?: string | null; // String
    email_not?: string | null; // String
    email_not_contains?: string | null; // String
    email_not_ends_with?: string | null; // String
    email_not_in?: string[] | null; // [String!]
    email_not_starts_with?: string | null; // String
    email_starts_with?: string | null; // String
    firstName?: string | null; // String
    firstName_contains?: string | null; // String
    firstName_ends_with?: string | null; // String
    firstName_gt?: string | null; // String
    firstName_gte?: string | null; // String
    firstName_in?: string[] | null; // [String!]
    firstName_lt?: string | null; // String
    firstName_lte?: string | null; // String
    firstName_not?: string | null; // String
    firstName_not_contains?: string | null; // String
    firstName_not_ends_with?: string | null; // String
    firstName_not_in?: string[] | null; // [String!]
    firstName_not_starts_with?: string | null; // String
    firstName_starts_with?: string | null; // String
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    lastName?: string | null; // String
    lastName_contains?: string | null; // String
    lastName_ends_with?: string | null; // String
    lastName_gt?: string | null; // String
    lastName_gte?: string | null; // String
    lastName_in?: string[] | null; // [String!]
    lastName_lt?: string | null; // String
    lastName_lte?: string | null; // String
    lastName_not?: string | null; // String
    lastName_not_contains?: string | null; // String
    lastName_not_ends_with?: string | null; // String
    lastName_not_in?: string[] | null; // [String!]
    lastName_not_starts_with?: string | null; // String
    lastName_starts_with?: string | null; // String
    NOT?: NexusGenInputs['TransactionWhereInput'][] | null; // [TransactionWhereInput!]
    offer?: NexusGenInputs['OfferWhereInput'] | null; // OfferWhereInput
    OR?: NexusGenInputs['TransactionWhereInput'][] | null; // [TransactionWhereInput!]
    status?: NexusGenEnums['TransactionStatus'] | null; // TransactionStatus
    status_in?: NexusGenEnums['TransactionStatus'][] | null; // [TransactionStatus!]
    status_not?: NexusGenEnums['TransactionStatus'] | null; // TransactionStatus
    status_not_in?: NexusGenEnums['TransactionStatus'][] | null; // [TransactionStatus!]
    updatedAt?: any | null; // DateTime
    updatedAt_gt?: any | null; // DateTime
    updatedAt_gte?: any | null; // DateTime
    updatedAt_in?: any[] | null; // [DateTime!]
    updatedAt_lt?: any | null; // DateTime
    updatedAt_lte?: any | null; // DateTime
    updatedAt_not?: any | null; // DateTime
    updatedAt_not_in?: any[] | null; // [DateTime!]
  }
  UserWhereInput: { // input type
    adress?: NexusGenInputs['AdressWhereInput'] | null; // AdressWhereInput
    AND?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    email?: string | null; // String
    email_contains?: string | null; // String
    email_ends_with?: string | null; // String
    email_gt?: string | null; // String
    email_gte?: string | null; // String
    email_in?: string[] | null; // [String!]
    email_lt?: string | null; // String
    email_lte?: string | null; // String
    email_not?: string | null; // String
    email_not_contains?: string | null; // String
    email_not_ends_with?: string | null; // String
    email_not_in?: string[] | null; // [String!]
    email_not_starts_with?: string | null; // String
    email_starts_with?: string | null; // String
    firstName?: string | null; // String
    firstName_contains?: string | null; // String
    firstName_ends_with?: string | null; // String
    firstName_gt?: string | null; // String
    firstName_gte?: string | null; // String
    firstName_in?: string[] | null; // [String!]
    firstName_lt?: string | null; // String
    firstName_lte?: string | null; // String
    firstName_not?: string | null; // String
    firstName_not_contains?: string | null; // String
    firstName_not_ends_with?: string | null; // String
    firstName_not_in?: string[] | null; // [String!]
    firstName_not_starts_with?: string | null; // String
    firstName_starts_with?: string | null; // String
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    lastName?: string | null; // String
    lastName_contains?: string | null; // String
    lastName_ends_with?: string | null; // String
    lastName_gt?: string | null; // String
    lastName_gte?: string | null; // String
    lastName_in?: string[] | null; // [String!]
    lastName_lt?: string | null; // String
    lastName_lte?: string | null; // String
    lastName_not?: string | null; // String
    lastName_not_contains?: string | null; // String
    lastName_not_ends_with?: string | null; // String
    lastName_not_in?: string[] | null; // [String!]
    lastName_not_starts_with?: string | null; // String
    lastName_starts_with?: string | null; // String
    NOT?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    offers_every?: NexusGenInputs['OfferWhereInput'] | null; // OfferWhereInput
    offers_none?: NexusGenInputs['OfferWhereInput'] | null; // OfferWhereInput
    offers_some?: NexusGenInputs['OfferWhereInput'] | null; // OfferWhereInput
    OR?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    password?: string | null; // String
    password_contains?: string | null; // String
    password_ends_with?: string | null; // String
    password_gt?: string | null; // String
    password_gte?: string | null; // String
    password_in?: string[] | null; // [String!]
    password_lt?: string | null; // String
    password_lte?: string | null; // String
    password_not?: string | null; // String
    password_not_contains?: string | null; // String
    password_not_ends_with?: string | null; // String
    password_not_in?: string[] | null; // [String!]
    password_not_starts_with?: string | null; // String
    password_starts_with?: string | null; // String
    role?: NexusGenEnums['UserRole'] | null; // UserRole
    role_in?: NexusGenEnums['UserRole'][] | null; // [UserRole!]
    role_not?: NexusGenEnums['UserRole'] | null; // UserRole
    role_not_in?: NexusGenEnums['UserRole'][] | null; // [UserRole!]
  }
}

export interface NexusGenEnums {
  OfferOrderByInput: "active_ASC" | "active_DESC" | "amount_ASC" | "amount_DESC" | "createdAt_ASC" | "createdAt_DESC" | "deletedAt_ASC" | "deletedAt_DESC" | "email_ASC" | "email_DESC" | "firstName_ASC" | "firstName_DESC" | "id_ASC" | "id_DESC" | "lastName_ASC" | "lastName_DESC" | "name_ASC" | "name_DESC" | "price_ASC" | "price_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  OrganizationOrderByInput: "active_ASC" | "active_DESC" | "apiId_ASC" | "apiId_DESC" | "apiSecret_ASC" | "apiSecret_DESC" | "createdAt_ASC" | "createdAt_DESC" | "deletedAt_ASC" | "deletedAt_DESC" | "description_ASC" | "description_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "organizationId_ASC" | "organizationId_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "url_ASC" | "url_DESC"
  TransactionOrderByInput: "amount_ASC" | "amount_DESC" | "comment_ASC" | "comment_DESC" | "createdAt_ASC" | "createdAt_DESC" | "deletedAt_ASC" | "deletedAt_DESC" | "donatedAmount_ASC" | "donatedAmount_DESC" | "email_ASC" | "email_DESC" | "firstName_ASC" | "firstName_DESC" | "id_ASC" | "id_DESC" | "lastName_ASC" | "lastName_DESC" | "status_ASC" | "status_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  TransactionStatus: "FAILED" | "INSUFFICIENT" | "PAID" | "PENDING"
  UserRole: "ADMIN" | "USER"
}

export interface NexusGenRootTypes {
  AuthPayload: { // root type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  File: prisma.File;
  Mutation: {};
  Offer: prisma.Offer;
  Organization: prisma.Organization;
  Query: {};
  Transaction: prisma.Transaction;
  User: prisma.User;
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
  Upload: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  AdressWhereInput: NexusGenInputs['AdressWhereInput'];
  FileWhereInput: NexusGenInputs['FileWhereInput'];
  OfferWhereInput: NexusGenInputs['OfferWhereInput'];
  OrganizationWhereInput: NexusGenInputs['OrganizationWhereInput'];
  OrganizationWhereUniqueInput: NexusGenInputs['OrganizationWhereUniqueInput'];
  TransactionWhereInput: NexusGenInputs['TransactionWhereInput'];
  UserWhereInput: NexusGenInputs['UserWhereInput'];
  OfferOrderByInput: NexusGenEnums['OfferOrderByInput'];
  OrganizationOrderByInput: NexusGenEnums['OrganizationOrderByInput'];
  TransactionOrderByInput: NexusGenEnums['TransactionOrderByInput'];
  TransactionStatus: NexusGenEnums['TransactionStatus'];
  UserRole: NexusGenEnums['UserRole'];
}

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  File: { // field return type
    fileName: string; // String!
    id: string; // ID!
    key: string; // String!
  }
  Mutation: { // field return type
    createOffer: NexusGenRootTypes['Offer']; // Offer!
    createOrganization: NexusGenRootTypes['Organization']; // Organization!
    createTransaction: NexusGenRootTypes['Transaction']; // Transaction!
    login: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    signup: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    updateUser: NexusGenRootTypes['User']; // User!
    uploadFile: NexusGenRootTypes['File']; // File!
  }
  Offer: { // field return type
    active: boolean | null; // Boolean
    amount: number | null; // Int
    beneficator: NexusGenRootTypes['Organization']; // Organization!
    createdAt: any | null; // DateTime
    deletedAt: any | null; // DateTime
    email: string; // String!
    firstName: string; // String!
    id: string; // ID!
    lastName: string; // String!
    name: string; // String!
    price: number; // Int!
    transactions: NexusGenRootTypes['Transaction'][] | null; // [Transaction!]
    updatedAt: any | null; // DateTime
    user: NexusGenRootTypes['User']; // User!
  }
  Organization: { // field return type
    description: string; // String!
    id: string; // ID!
    logo: NexusGenRootTypes['File']; // File!
    name: string; // String!
    offers: NexusGenRootTypes['Offer'][] | null; // [Offer!]
    url: string; // String!
  }
  Query: { // field return type
    getTransactionStatus: NexusGenRootTypes['Transaction']; // Transaction!
    offers: NexusGenRootTypes['Offer'][]; // [Offer!]!
    organization: NexusGenRootTypes['Organization'] | null; // Organization
    organizations: NexusGenRootTypes['Organization'][]; // [Organization!]!
    recentTransactions: NexusGenRootTypes['Transaction'][]; // [Transaction!]!
    user: NexusGenRootTypes['User']; // User!
  }
  Transaction: { // field return type
    donatedAmount: number | null; // Int
    firstName: string; // String!
    id: string; // ID!
    lastName: string; // String!
    offer: NexusGenRootTypes['Offer']; // Offer!
    status: NexusGenEnums['TransactionStatus']; // TransactionStatus!
  }
  User: { // field return type
    email: string; // String!
    fullName: string; // String!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createOffer: { // args
      amount: number; // Int!
      email: string; // String!
      firstName: string; // String!
      lastName: string; // String!
      name: string; // String!
      organizationId: string; // ID!
      price: number; // Int!
    }
    createOrganization: { // args
      active?: boolean | null; // Boolean
      apiId?: number | null; // Int
      apiSecret?: string | null; // String
      description: string; // String!
      logoId: string; // ID!
      name: string; // String!
      organizationId?: number | null; // Int
      url: string; // String!
    }
    createTransaction: { // args
      amount: number; // Int!
      comment?: string | null; // String
      email: string; // String!
      firstName: string; // String!
      lastName: string; // String!
      offerId: string; // ID!
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    signup: { // args
      email: string; // String!
      firstName: string; // String!
      lastName: string; // String!
      password: string; // String!
    }
    updateUser: { // args
      city: string; // String!
      firstName: string; // String!
      id: string; // ID!
      lastName: string; // String!
      postalCode: string; // String!
      street: string; // String!
    }
    uploadFile: { // args
      directory?: string | null; // String
      file: any; // Upload!
    }
  }
  Offer: {
    transactions: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['TransactionOrderByInput'] | null; // TransactionOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['TransactionWhereInput'] | null; // TransactionWhereInput
    }
  }
  Organization: {
    offers: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['OfferOrderByInput'] | null; // OfferOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['OfferWhereInput'] | null; // OfferWhereInput
    }
  }
  Query: {
    getTransactionStatus: { // args
      id: string; // ID!
    }
    organization: { // args
      where: NexusGenInputs['OrganizationWhereUniqueInput']; // OrganizationWhereUniqueInput!
    }
    organizations: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['OrganizationOrderByInput'] | null; // OrganizationOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['OrganizationWhereInput'] | null; // OrganizationWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "AuthPayload" | "File" | "Mutation" | "Offer" | "Organization" | "Query" | "Transaction" | "User";

export type NexusGenInputNames = "AdressWhereInput" | "FileWhereInput" | "OfferWhereInput" | "OrganizationWhereInput" | "OrganizationWhereUniqueInput" | "TransactionWhereInput" | "UserWhereInput";

export type NexusGenEnumNames = "OfferOrderByInput" | "OrganizationOrderByInput" | "TransactionOrderByInput" | "TransactionStatus" | "UserRole";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String" | "Upload";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: ctx.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}