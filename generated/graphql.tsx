import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
};

export type AuthPayload = {
   __typename?: 'AuthPayload',
  token: Scalars['String'],
  user: User,
};


export type Mutation = {
   __typename?: 'Mutation',
  /** Create new Fundlamb offer */
  createOffer: Offer,
  createOrganization: Organization,
  createTransaction: Transaction,
  signup: AuthPayload,
  login: AuthPayload,
};


export type MutationCreateOfferArgs = {
  name: Scalars['String'],
  organizationId: Scalars['ID'],
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  price: Scalars['Int'],
  amount?: Maybe<Scalars['Int']>
};


export type MutationCreateOrganizationArgs = {
  apiId: Scalars['Int'],
  apiSecret: Scalars['String'],
  organizationId: Scalars['Int'],
  active: Scalars['Boolean'],
  name: Scalars['String'],
  logo?: Maybe<Scalars['String']>,
  description: Scalars['String'],
  url: Scalars['String']
};


export type MutationCreateTransactionArgs = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
  comment?: Maybe<Scalars['String']>,
  amount: Scalars['Int'],
  donatedAmount: Scalars['Int'],
  offerId: Scalars['ID']
};


export type MutationSignupArgs = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationLoginArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};

export type Offer = {
   __typename?: 'Offer',
  id: Scalars['ID'],
  active?: Maybe<Scalars['Boolean']>,
  amount?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  transactions?: Maybe<Array<Transaction>>,
  beneficator: Organization,
  price: Scalars['Int'],
  name: Scalars['String'],
  user: User,
};


export type OfferTransactionsArgs = {
  where?: Maybe<TransactionWhereInput>,
  orderBy?: Maybe<TransactionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export enum OfferOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ActiveAsc = 'active_ASC',
  ActiveDesc = 'active_DESC',
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type OfferWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  active?: Maybe<Scalars['Boolean']>,
  active_not?: Maybe<Scalars['Boolean']>,
  amount?: Maybe<Scalars['Int']>,
  amount_not?: Maybe<Scalars['Int']>,
  amount_in?: Maybe<Array<Scalars['Int']>>,
  amount_not_in?: Maybe<Array<Scalars['Int']>>,
  amount_lt?: Maybe<Scalars['Int']>,
  amount_lte?: Maybe<Scalars['Int']>,
  amount_gt?: Maybe<Scalars['Int']>,
  amount_gte?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  deletedAt_not?: Maybe<Scalars['DateTime']>,
  deletedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  deletedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  deletedAt_lt?: Maybe<Scalars['DateTime']>,
  deletedAt_lte?: Maybe<Scalars['DateTime']>,
  deletedAt_gt?: Maybe<Scalars['DateTime']>,
  deletedAt_gte?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  email_not?: Maybe<Scalars['String']>,
  email_in?: Maybe<Array<Scalars['String']>>,
  email_not_in?: Maybe<Array<Scalars['String']>>,
  email_lt?: Maybe<Scalars['String']>,
  email_lte?: Maybe<Scalars['String']>,
  email_gt?: Maybe<Scalars['String']>,
  email_gte?: Maybe<Scalars['String']>,
  email_contains?: Maybe<Scalars['String']>,
  email_not_contains?: Maybe<Scalars['String']>,
  email_starts_with?: Maybe<Scalars['String']>,
  email_not_starts_with?: Maybe<Scalars['String']>,
  email_ends_with?: Maybe<Scalars['String']>,
  email_not_ends_with?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  firstName_not?: Maybe<Scalars['String']>,
  firstName_in?: Maybe<Array<Scalars['String']>>,
  firstName_not_in?: Maybe<Array<Scalars['String']>>,
  firstName_lt?: Maybe<Scalars['String']>,
  firstName_lte?: Maybe<Scalars['String']>,
  firstName_gt?: Maybe<Scalars['String']>,
  firstName_gte?: Maybe<Scalars['String']>,
  firstName_contains?: Maybe<Scalars['String']>,
  firstName_not_contains?: Maybe<Scalars['String']>,
  firstName_starts_with?: Maybe<Scalars['String']>,
  firstName_not_starts_with?: Maybe<Scalars['String']>,
  firstName_ends_with?: Maybe<Scalars['String']>,
  firstName_not_ends_with?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  lastName_not?: Maybe<Scalars['String']>,
  lastName_in?: Maybe<Array<Scalars['String']>>,
  lastName_not_in?: Maybe<Array<Scalars['String']>>,
  lastName_lt?: Maybe<Scalars['String']>,
  lastName_lte?: Maybe<Scalars['String']>,
  lastName_gt?: Maybe<Scalars['String']>,
  lastName_gte?: Maybe<Scalars['String']>,
  lastName_contains?: Maybe<Scalars['String']>,
  lastName_not_contains?: Maybe<Scalars['String']>,
  lastName_starts_with?: Maybe<Scalars['String']>,
  lastName_not_starts_with?: Maybe<Scalars['String']>,
  lastName_ends_with?: Maybe<Scalars['String']>,
  lastName_not_ends_with?: Maybe<Scalars['String']>,
  transactions_every?: Maybe<TransactionWhereInput>,
  transactions_some?: Maybe<TransactionWhereInput>,
  transactions_none?: Maybe<TransactionWhereInput>,
  beneficator?: Maybe<OrganizationWhereInput>,
  price?: Maybe<Scalars['Int']>,
  price_not?: Maybe<Scalars['Int']>,
  price_in?: Maybe<Array<Scalars['Int']>>,
  price_not_in?: Maybe<Array<Scalars['Int']>>,
  price_lt?: Maybe<Scalars['Int']>,
  price_lte?: Maybe<Scalars['Int']>,
  price_gt?: Maybe<Scalars['Int']>,
  price_gte?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  user?: Maybe<UserWhereInput>,
  AND?: Maybe<Array<OfferWhereInput>>,
  OR?: Maybe<Array<OfferWhereInput>>,
  NOT?: Maybe<Array<OfferWhereInput>>,
};

export type Organization = {
   __typename?: 'Organization',
  id: Scalars['ID'],
  name: Scalars['String'],
  logo?: Maybe<Scalars['String']>,
  offers?: Maybe<Array<Offer>>,
  description: Scalars['String'],
  url: Scalars['String'],
};


export type OrganizationOffersArgs = {
  where?: Maybe<OfferWhereInput>,
  orderBy?: Maybe<OfferOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export enum OrganizationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ApiIdAsc = 'apiId_ASC',
  ApiIdDesc = 'apiId_DESC',
  ApiSecretAsc = 'apiSecret_ASC',
  ApiSecretDesc = 'apiSecret_DESC',
  OrganizationIdAsc = 'organizationId_ASC',
  OrganizationIdDesc = 'organizationId_DESC',
  ActiveAsc = 'active_ASC',
  ActiveDesc = 'active_DESC',
  LogoAsc = 'logo_ASC',
  LogoDesc = 'logo_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type OrganizationWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  apiId?: Maybe<Scalars['Int']>,
  apiId_not?: Maybe<Scalars['Int']>,
  apiId_in?: Maybe<Array<Scalars['Int']>>,
  apiId_not_in?: Maybe<Array<Scalars['Int']>>,
  apiId_lt?: Maybe<Scalars['Int']>,
  apiId_lte?: Maybe<Scalars['Int']>,
  apiId_gt?: Maybe<Scalars['Int']>,
  apiId_gte?: Maybe<Scalars['Int']>,
  apiSecret?: Maybe<Scalars['String']>,
  apiSecret_not?: Maybe<Scalars['String']>,
  apiSecret_in?: Maybe<Array<Scalars['String']>>,
  apiSecret_not_in?: Maybe<Array<Scalars['String']>>,
  apiSecret_lt?: Maybe<Scalars['String']>,
  apiSecret_lte?: Maybe<Scalars['String']>,
  apiSecret_gt?: Maybe<Scalars['String']>,
  apiSecret_gte?: Maybe<Scalars['String']>,
  apiSecret_contains?: Maybe<Scalars['String']>,
  apiSecret_not_contains?: Maybe<Scalars['String']>,
  apiSecret_starts_with?: Maybe<Scalars['String']>,
  apiSecret_not_starts_with?: Maybe<Scalars['String']>,
  apiSecret_ends_with?: Maybe<Scalars['String']>,
  apiSecret_not_ends_with?: Maybe<Scalars['String']>,
  organizationId?: Maybe<Scalars['Int']>,
  organizationId_not?: Maybe<Scalars['Int']>,
  organizationId_in?: Maybe<Array<Scalars['Int']>>,
  organizationId_not_in?: Maybe<Array<Scalars['Int']>>,
  organizationId_lt?: Maybe<Scalars['Int']>,
  organizationId_lte?: Maybe<Scalars['Int']>,
  organizationId_gt?: Maybe<Scalars['Int']>,
  organizationId_gte?: Maybe<Scalars['Int']>,
  active?: Maybe<Scalars['Boolean']>,
  active_not?: Maybe<Scalars['Boolean']>,
  logo?: Maybe<Scalars['String']>,
  logo_not?: Maybe<Scalars['String']>,
  logo_in?: Maybe<Array<Scalars['String']>>,
  logo_not_in?: Maybe<Array<Scalars['String']>>,
  logo_lt?: Maybe<Scalars['String']>,
  logo_lte?: Maybe<Scalars['String']>,
  logo_gt?: Maybe<Scalars['String']>,
  logo_gte?: Maybe<Scalars['String']>,
  logo_contains?: Maybe<Scalars['String']>,
  logo_not_contains?: Maybe<Scalars['String']>,
  logo_starts_with?: Maybe<Scalars['String']>,
  logo_not_starts_with?: Maybe<Scalars['String']>,
  logo_ends_with?: Maybe<Scalars['String']>,
  logo_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  deletedAt_not?: Maybe<Scalars['DateTime']>,
  deletedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  deletedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  deletedAt_lt?: Maybe<Scalars['DateTime']>,
  deletedAt_lte?: Maybe<Scalars['DateTime']>,
  deletedAt_gt?: Maybe<Scalars['DateTime']>,
  deletedAt_gte?: Maybe<Scalars['DateTime']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  offers_every?: Maybe<OfferWhereInput>,
  offers_some?: Maybe<OfferWhereInput>,
  offers_none?: Maybe<OfferWhereInput>,
  description?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  url_not?: Maybe<Scalars['String']>,
  url_in?: Maybe<Array<Scalars['String']>>,
  url_not_in?: Maybe<Array<Scalars['String']>>,
  url_lt?: Maybe<Scalars['String']>,
  url_lte?: Maybe<Scalars['String']>,
  url_gt?: Maybe<Scalars['String']>,
  url_gte?: Maybe<Scalars['String']>,
  url_contains?: Maybe<Scalars['String']>,
  url_not_contains?: Maybe<Scalars['String']>,
  url_starts_with?: Maybe<Scalars['String']>,
  url_not_starts_with?: Maybe<Scalars['String']>,
  url_ends_with?: Maybe<Scalars['String']>,
  url_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<OrganizationWhereInput>>,
  OR?: Maybe<Array<OrganizationWhereInput>>,
  NOT?: Maybe<Array<OrganizationWhereInput>>,
};

export type OrganizationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Query = {
   __typename?: 'Query',
  offers: Array<Offer>,
  organization?: Maybe<Organization>,
  organizations: Array<Organization>,
  recentTransactions: Array<Transaction>,
  user: User,
};


export type QueryOrganizationArgs = {
  where: OrganizationWhereUniqueInput
};


export type QueryOrganizationsArgs = {
  where?: Maybe<OrganizationWhereInput>,
  orderBy?: Maybe<OrganizationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type Transaction = {
   __typename?: 'Transaction',
  firstName: Scalars['String'],
  donatedAmount?: Maybe<Scalars['Int']>,
};

export enum TransactionOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  CommentAsc = 'comment_ASC',
  CommentDesc = 'comment_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DonatedAmountAsc = 'donatedAmount_ASC',
  DonatedAmountDesc = 'donatedAmount_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC'
}

export enum TransactionStatus {
  Pending = 'PENDING',
  Paid = 'PAID',
  Failed = 'FAILED',
  Insufficient = 'INSUFFICIENT'
}

export type TransactionWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  amount?: Maybe<Scalars['Int']>,
  amount_not?: Maybe<Scalars['Int']>,
  amount_in?: Maybe<Array<Scalars['Int']>>,
  amount_not_in?: Maybe<Array<Scalars['Int']>>,
  amount_lt?: Maybe<Scalars['Int']>,
  amount_lte?: Maybe<Scalars['Int']>,
  amount_gt?: Maybe<Scalars['Int']>,
  amount_gte?: Maybe<Scalars['Int']>,
  email?: Maybe<Scalars['String']>,
  email_not?: Maybe<Scalars['String']>,
  email_in?: Maybe<Array<Scalars['String']>>,
  email_not_in?: Maybe<Array<Scalars['String']>>,
  email_lt?: Maybe<Scalars['String']>,
  email_lte?: Maybe<Scalars['String']>,
  email_gt?: Maybe<Scalars['String']>,
  email_gte?: Maybe<Scalars['String']>,
  email_contains?: Maybe<Scalars['String']>,
  email_not_contains?: Maybe<Scalars['String']>,
  email_starts_with?: Maybe<Scalars['String']>,
  email_not_starts_with?: Maybe<Scalars['String']>,
  email_ends_with?: Maybe<Scalars['String']>,
  email_not_ends_with?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  firstName_not?: Maybe<Scalars['String']>,
  firstName_in?: Maybe<Array<Scalars['String']>>,
  firstName_not_in?: Maybe<Array<Scalars['String']>>,
  firstName_lt?: Maybe<Scalars['String']>,
  firstName_lte?: Maybe<Scalars['String']>,
  firstName_gt?: Maybe<Scalars['String']>,
  firstName_gte?: Maybe<Scalars['String']>,
  firstName_contains?: Maybe<Scalars['String']>,
  firstName_not_contains?: Maybe<Scalars['String']>,
  firstName_starts_with?: Maybe<Scalars['String']>,
  firstName_not_starts_with?: Maybe<Scalars['String']>,
  firstName_ends_with?: Maybe<Scalars['String']>,
  firstName_not_ends_with?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  lastName_not?: Maybe<Scalars['String']>,
  lastName_in?: Maybe<Array<Scalars['String']>>,
  lastName_not_in?: Maybe<Array<Scalars['String']>>,
  lastName_lt?: Maybe<Scalars['String']>,
  lastName_lte?: Maybe<Scalars['String']>,
  lastName_gt?: Maybe<Scalars['String']>,
  lastName_gte?: Maybe<Scalars['String']>,
  lastName_contains?: Maybe<Scalars['String']>,
  lastName_not_contains?: Maybe<Scalars['String']>,
  lastName_starts_with?: Maybe<Scalars['String']>,
  lastName_not_starts_with?: Maybe<Scalars['String']>,
  lastName_ends_with?: Maybe<Scalars['String']>,
  lastName_not_ends_with?: Maybe<Scalars['String']>,
  comment?: Maybe<Scalars['String']>,
  comment_not?: Maybe<Scalars['String']>,
  comment_in?: Maybe<Array<Scalars['String']>>,
  comment_not_in?: Maybe<Array<Scalars['String']>>,
  comment_lt?: Maybe<Scalars['String']>,
  comment_lte?: Maybe<Scalars['String']>,
  comment_gt?: Maybe<Scalars['String']>,
  comment_gte?: Maybe<Scalars['String']>,
  comment_contains?: Maybe<Scalars['String']>,
  comment_not_contains?: Maybe<Scalars['String']>,
  comment_starts_with?: Maybe<Scalars['String']>,
  comment_not_starts_with?: Maybe<Scalars['String']>,
  comment_ends_with?: Maybe<Scalars['String']>,
  comment_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  deletedAt_not?: Maybe<Scalars['DateTime']>,
  deletedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  deletedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  deletedAt_lt?: Maybe<Scalars['DateTime']>,
  deletedAt_lte?: Maybe<Scalars['DateTime']>,
  deletedAt_gt?: Maybe<Scalars['DateTime']>,
  deletedAt_gte?: Maybe<Scalars['DateTime']>,
  donatedAmount?: Maybe<Scalars['Int']>,
  donatedAmount_not?: Maybe<Scalars['Int']>,
  donatedAmount_in?: Maybe<Array<Scalars['Int']>>,
  donatedAmount_not_in?: Maybe<Array<Scalars['Int']>>,
  donatedAmount_lt?: Maybe<Scalars['Int']>,
  donatedAmount_lte?: Maybe<Scalars['Int']>,
  donatedAmount_gt?: Maybe<Scalars['Int']>,
  donatedAmount_gte?: Maybe<Scalars['Int']>,
  status?: Maybe<TransactionStatus>,
  status_not?: Maybe<TransactionStatus>,
  status_in?: Maybe<Array<TransactionStatus>>,
  status_not_in?: Maybe<Array<TransactionStatus>>,
  offer?: Maybe<OfferWhereInput>,
  AND?: Maybe<Array<TransactionWhereInput>>,
  OR?: Maybe<Array<TransactionWhereInput>>,
  NOT?: Maybe<Array<TransactionWhereInput>>,
};

export type User = {
   __typename?: 'User',
  email: Scalars['String'],
  fullName: Scalars['String'],
};

export enum UserRole {
  User = 'USER',
  Admin = 'ADMIN'
}

export type UserWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  email?: Maybe<Scalars['String']>,
  email_not?: Maybe<Scalars['String']>,
  email_in?: Maybe<Array<Scalars['String']>>,
  email_not_in?: Maybe<Array<Scalars['String']>>,
  email_lt?: Maybe<Scalars['String']>,
  email_lte?: Maybe<Scalars['String']>,
  email_gt?: Maybe<Scalars['String']>,
  email_gte?: Maybe<Scalars['String']>,
  email_contains?: Maybe<Scalars['String']>,
  email_not_contains?: Maybe<Scalars['String']>,
  email_starts_with?: Maybe<Scalars['String']>,
  email_not_starts_with?: Maybe<Scalars['String']>,
  email_ends_with?: Maybe<Scalars['String']>,
  email_not_ends_with?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  firstName_not?: Maybe<Scalars['String']>,
  firstName_in?: Maybe<Array<Scalars['String']>>,
  firstName_not_in?: Maybe<Array<Scalars['String']>>,
  firstName_lt?: Maybe<Scalars['String']>,
  firstName_lte?: Maybe<Scalars['String']>,
  firstName_gt?: Maybe<Scalars['String']>,
  firstName_gte?: Maybe<Scalars['String']>,
  firstName_contains?: Maybe<Scalars['String']>,
  firstName_not_contains?: Maybe<Scalars['String']>,
  firstName_starts_with?: Maybe<Scalars['String']>,
  firstName_not_starts_with?: Maybe<Scalars['String']>,
  firstName_ends_with?: Maybe<Scalars['String']>,
  firstName_not_ends_with?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  lastName_not?: Maybe<Scalars['String']>,
  lastName_in?: Maybe<Array<Scalars['String']>>,
  lastName_not_in?: Maybe<Array<Scalars['String']>>,
  lastName_lt?: Maybe<Scalars['String']>,
  lastName_lte?: Maybe<Scalars['String']>,
  lastName_gt?: Maybe<Scalars['String']>,
  lastName_gte?: Maybe<Scalars['String']>,
  lastName_contains?: Maybe<Scalars['String']>,
  lastName_not_contains?: Maybe<Scalars['String']>,
  lastName_starts_with?: Maybe<Scalars['String']>,
  lastName_not_starts_with?: Maybe<Scalars['String']>,
  lastName_ends_with?: Maybe<Scalars['String']>,
  lastName_not_ends_with?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  password_not?: Maybe<Scalars['String']>,
  password_in?: Maybe<Array<Scalars['String']>>,
  password_not_in?: Maybe<Array<Scalars['String']>>,
  password_lt?: Maybe<Scalars['String']>,
  password_lte?: Maybe<Scalars['String']>,
  password_gt?: Maybe<Scalars['String']>,
  password_gte?: Maybe<Scalars['String']>,
  password_contains?: Maybe<Scalars['String']>,
  password_not_contains?: Maybe<Scalars['String']>,
  password_starts_with?: Maybe<Scalars['String']>,
  password_not_starts_with?: Maybe<Scalars['String']>,
  password_ends_with?: Maybe<Scalars['String']>,
  password_not_ends_with?: Maybe<Scalars['String']>,
  role?: Maybe<UserRole>,
  role_not?: Maybe<UserRole>,
  role_in?: Maybe<Array<UserRole>>,
  role_not_in?: Maybe<Array<UserRole>>,
  offers_every?: Maybe<OfferWhereInput>,
  offers_some?: Maybe<OfferWhereInput>,
  offers_none?: Maybe<OfferWhereInput>,
  AND?: Maybe<Array<UserWhereInput>>,
  OR?: Maybe<Array<UserWhereInput>>,
  NOT?: Maybe<Array<UserWhereInput>>,
};
export type UserQueryVariables = {};


export type UserQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'email' | 'fullName'>
  ) }
);

export type OffersQueryVariables = {};


export type OffersQuery = (
  { __typename?: 'Query' }
  & { offers: Array<(
    { __typename?: 'Offer' }
    & Pick<Offer, 'id' | 'name' | 'price'>
    & { beneficator: (
      { __typename?: 'Organization' }
      & Pick<Organization, 'name'>
    ) }
  )> }
);

export type OrganizationsQueryVariables = {};


export type OrganizationsQuery = (
  { __typename?: 'Query' }
  & { organizations: Array<(
    { __typename?: 'Organization' }
    & Pick<Organization, 'name' | 'description' | 'url'>
  )> }
);

export type RecentTransactionsQueryVariables = {};


export type RecentTransactionsQuery = (
  { __typename?: 'Query' }
  & { recentTransactions: Array<(
    { __typename?: 'Transaction' }
    & Pick<Transaction, 'firstName' | 'donatedAmount'>
  )> }
);

export type LoginMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
  ) }
);

export const UserDocument = gql`
    query user {
  user {
    email
    fullName
  }
}
    `;

    export function useUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserQuery, UserQueryVariables>) {
      return ApolloReactHooks.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
    }
      export function useUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
      
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserQueryResult = ApolloReactCommon.QueryResult<UserQuery, UserQueryVariables>;
export const OffersDocument = gql`
    query offers {
  offers {
    id
    name
    price
    beneficator {
      name
    }
  }
}
    `;

    export function useOffersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<OffersQuery, OffersQueryVariables>) {
      return ApolloReactHooks.useQuery<OffersQuery, OffersQueryVariables>(OffersDocument, baseOptions);
    }
      export function useOffersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OffersQuery, OffersQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<OffersQuery, OffersQueryVariables>(OffersDocument, baseOptions);
      }
      
export type OffersQueryHookResult = ReturnType<typeof useOffersQuery>;
export type OffersQueryResult = ApolloReactCommon.QueryResult<OffersQuery, OffersQueryVariables>;
export const OrganizationsDocument = gql`
    query organizations {
  organizations {
    name
    description
    url
  }
}
    `;

    export function useOrganizationsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<OrganizationsQuery, OrganizationsQueryVariables>) {
      return ApolloReactHooks.useQuery<OrganizationsQuery, OrganizationsQueryVariables>(OrganizationsDocument, baseOptions);
    }
      export function useOrganizationsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OrganizationsQuery, OrganizationsQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<OrganizationsQuery, OrganizationsQueryVariables>(OrganizationsDocument, baseOptions);
      }
      
export type OrganizationsQueryHookResult = ReturnType<typeof useOrganizationsQuery>;
export type OrganizationsQueryResult = ApolloReactCommon.QueryResult<OrganizationsQuery, OrganizationsQueryVariables>;
export const RecentTransactionsDocument = gql`
    query recentTransactions {
  recentTransactions {
    firstName
    donatedAmount
  }
}
    `;

    export function useRecentTransactionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<RecentTransactionsQuery, RecentTransactionsQueryVariables>) {
      return ApolloReactHooks.useQuery<RecentTransactionsQuery, RecentTransactionsQueryVariables>(RecentTransactionsDocument, baseOptions);
    }
      export function useRecentTransactionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RecentTransactionsQuery, RecentTransactionsQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<RecentTransactionsQuery, RecentTransactionsQueryVariables>(RecentTransactionsDocument, baseOptions);
      }
      
export type RecentTransactionsQueryHookResult = ReturnType<typeof useRecentTransactionsQuery>;
export type RecentTransactionsQueryResult = ApolloReactCommon.QueryResult<RecentTransactionsQuery, RecentTransactionsQueryVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

    export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
      return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
    }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;