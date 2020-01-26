/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as Context from "../context"
import { FieldAuthorizeResolver } from "nexus/dist/plugins/fieldAuthorizePlugin"
import { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    upload<FieldName extends string>(fieldName: FieldName, opts?: core.ScalarInputFieldConfig<core.GetGen3<"inputTypes", TypeName, FieldName>>): void // "Upload";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    upload<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Upload";
  }
}
declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  TransactionStatus: "FAILED" | "INSUFFICIENT" | "PAID" | "PENDING"
}

export interface NexusGenRootTypes {
  Adress: { // root type
    city?: string | null; // String
    postalCode?: string | null; // String
    street?: string | null; // String
  }
  AuthPayload: { // root type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  File: { // root type
    fileName: string; // String!
    id: string; // String!
    key: string; // String!
  }
  Gallery: { // root type
    id: string; // String!
  }
  Mutation: {};
  Offer: { // root type
    active?: boolean | null; // Boolean
    amount: number; // Int!
    description: string; // String!
    id: string; // String!
    name: string; // String!
    price: number; // Int!
    transport?: string | null; // String
  }
  Organization: { // root type
    apiId?: number | null; // Int
    description: string; // String!
    id: string; // String!
    name: string; // String!
    projectId?: number | null; // Int
    url: string; // String!
  }
  Query: {};
  Transaction: { // root type
    amount: number; // Int!
    donatedAmount?: number | null; // Int
    firstName: string; // String!
    id: string; // String!
    lastName: string; // String!
    status: NexusGenEnums['TransactionStatus']; // TransactionStatus!
  }
  TransactionsStatistics: { // root type
    donatedAmount: number; // Int!
    donationsCount: number; // Int!
    numberOfOrganizations: number; // Int!
  }
  User: { // root type
    email: string; // String!
    firstName: string; // String!
    lastName: string; // String!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  Upload: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  TransactionStatus: NexusGenEnums['TransactionStatus'];
}

export interface NexusGenFieldTypes {
  Adress: { // field return type
    city: string | null; // String
    postalCode: string | null; // String
    street: string | null; // String
  }
  AuthPayload: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  File: { // field return type
    fileName: string; // String!
    id: string; // String!
    key: string; // String!
  }
  Gallery: { // field return type
    id: string; // String!
    images: NexusGenRootTypes['File'][]; // [File!]!
  }
  Mutation: { // field return type
    changeActiveStateOffer: NexusGenRootTypes['Offer']; // Offer!
    createOffer: NexusGenRootTypes['Offer']; // Offer!
    createOrganization: NexusGenRootTypes['Organization']; // Organization!
    createTransaction: NexusGenRootTypes['Transaction']; // Transaction!
    login: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    signup: NexusGenRootTypes['AuthPayload'] | null; // AuthPayload
    updateUser: NexusGenRootTypes['User']; // User!
    uploadFile: NexusGenRootTypes['File']; // File!
  }
  Offer: { // field return type
    active: boolean | null; // Boolean
    amount: number; // Int!
    beneficator: NexusGenRootTypes['Organization'] | null; // Organization
    description: string; // String!
    gallery: NexusGenRootTypes['Gallery']; // Gallery!
    id: string; // String!
    name: string; // String!
    price: number; // Int!
    remainingAmount: number; // Int!
    transport: string | null; // String
    user: NexusGenRootTypes['User'] | null; // User
  }
  Organization: { // field return type
    apiId: number | null; // Int
    description: string; // String!
    id: string; // String!
    logo: NexusGenRootTypes['File'] | null; // File
    name: string; // String!
    projectId: number | null; // Int
    url: string; // String!
  }
  Query: { // field return type
    getTransactionsStatistics: NexusGenRootTypes['TransactionsStatistics']; // TransactionsStatistics!
    getTransactionStatus: NexusGenRootTypes['Transaction']; // Transaction!
    offer: NexusGenRootTypes['Offer'] | null; // Offer
    offers: NexusGenRootTypes['Offer'][]; // [Offer!]!
    organizations: NexusGenRootTypes['Organization'][]; // [Organization!]!
    recentTransactions: NexusGenRootTypes['Transaction'][]; // [Transaction!]!
    user: NexusGenRootTypes['User']; // User!
  }
  Transaction: { // field return type
    amount: number; // Int!
    donatedAmount: number | null; // Int
    firstName: string; // String!
    id: string; // String!
    lastName: string; // String!
    offer: NexusGenRootTypes['Offer']; // Offer!
    status: NexusGenEnums['TransactionStatus']; // TransactionStatus!
  }
  TransactionsStatistics: { // field return type
    donatedAmount: number; // Int!
    donationsCount: number; // Int!
    numberOfOrganizations: number; // Int!
  }
  User: { // field return type
    adress: NexusGenRootTypes['Adress'] | null; // Adress
    email: string; // String!
    firstName: string; // String!
    fullName: string; // String!
    lastName: string; // String!
    shortName: string; // String!
  }
}

export interface NexusGenArgTypes {
  Gallery: {
    images: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
  Mutation: {
    changeActiveStateOffer: { // args
      active: boolean; // Boolean!
      confirmationHash: string; // String!
      offerId: string; // ID!
    }
    createOffer: { // args
      amount: number; // Int!
      description: string; // String!
      email: string; // String!
      firstName: string; // String!
      images: string[]; // [ID!]!
      lastName: string; // String!
      offerName: string; // String!
      organizationId: string; // ID!
      price: number; // Int!
      publicOffer: boolean; // Boolean!
      transport: string; // String!
    }
    createOrganization: { // args
      active?: boolean | null; // Boolean
      apiId: number; // Int!
      apiSecret: string; // String!
      description: string; // String!
      logoId: string; // ID!
      name: string; // String!
      organizationId: number; // Int!
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
      firstName?: string | null; // String
      lastName?: string | null; // String
      password: string; // String!
    }
    updateUser: { // args
      city: string; // String!
      firstName: string; // String!
      id?: string | null; // ID
      lastName: string; // String!
      postalCode: string; // String!
      street: string; // String!
    }
    uploadFile: { // args
      directory?: string | null; // String
      file?: any | null; // Upload
    }
  }
  Query: {
    getTransactionStatus: { // args
      id: string; // ID!
    }
    offer: { // args
      id: string; // ID!
    }
    offers: { // args
      active?: boolean | null; // Boolean
      publicOffer?: boolean | null; // Boolean
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Adress" | "AuthPayload" | "File" | "Gallery" | "Mutation" | "Offer" | "Organization" | "Query" | "Transaction" | "TransactionsStatistics" | "User";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = "TransactionStatus";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String" | "Upload";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: Context.Context;
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


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Authorization for an individual field. Returning "true"
     * or "Promise<true>" means the field can be accessed.
     * Returning "false" or "Promise<false>" will respond
     * with a "Not Authorized" error for the field.
     * Returning or throwing an error will also prevent the
     * resolver from executing.
     */
    authorize?: FieldAuthorizeResolver<TypeName, FieldName>
  }
  interface NexusGenPluginSchemaConfig {
  }
}