import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type CreateOrderInput = {
  area: Scalars['String'];
  books: Array<Scalars['String']>;
  isDelivered: Scalars['Boolean'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type ErrorFelids = {
  __typename?: 'ErrorFelids';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOrder: OrderResponse;
  deleteOrder: Scalars['Boolean'];
};


export type MutationCreateOrderArgs = {
  options: CreateOrderInput;
  orderId?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteOrderArgs = {
  orderId: Scalars['String'];
};

export type Order = {
  __typename?: 'Order';
  _id?: Maybe<Scalars['String']>;
  area: Scalars['String'];
  books: Array<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  isDelivered?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type OrderResponse = {
  __typename?: 'OrderResponse';
  data?: Maybe<Order>;
  errors?: Maybe<Array<ErrorFelids>>;
  statusCode?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  hello: Array<Order>;
  orders: Array<Order>;
};

export type CreateOrderMutationVariables = Exact<{
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  area: Scalars['String'];
  books: Array<Scalars['String']> | Scalars['String'];
  isDelivered: Scalars['Boolean'];
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', createOrder: { __typename?: 'OrderResponse', statusCode?: string | null | undefined, errors?: Array<{ __typename?: 'ErrorFelids', field: string, message: string }> | null | undefined, data?: { __typename?: 'Order', _id?: string | null | undefined, name: string, phoneNumber: string, area: string, books: Array<string>, createdAt: any, updatedAt: any } | null | undefined } };

export type UpdateOrderMutationVariables = Exact<{
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  area: Scalars['String'];
  books: Array<Scalars['String']> | Scalars['String'];
  isDelivered: Scalars['Boolean'];
  orderId: Scalars['String'];
}>;


export type UpdateOrderMutation = { __typename?: 'Mutation', createOrder: { __typename?: 'OrderResponse', statusCode?: string | null | undefined, errors?: Array<{ __typename?: 'ErrorFelids', field: string, message: string }> | null | undefined, data?: { __typename?: 'Order', _id?: string | null | undefined, name: string, phoneNumber: string, area: string, books: Array<string>, createdAt: any, updatedAt: any } | null | undefined } };

export type DeleteOrderMutationVariables = Exact<{
  orderId: Scalars['String'];
}>;


export type DeleteOrderMutation = { __typename?: 'Mutation', deleteOrder: boolean };

export type OrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type OrdersQuery = { __typename?: 'Query', orders: Array<{ __typename?: 'Order', _id?: string | null | undefined, name: string, phoneNumber: string, area: string, books: Array<string>, isDelivered?: boolean | null | undefined, createdAt: any, updatedAt: any }> };


export const CreateOrderDocument = gql`
    mutation CreateOrder($name: String!, $phoneNumber: String!, $area: String!, $books: [String!]!, $isDelivered: Boolean!) {
  createOrder(
    options: {name: $name, phoneNumber: $phoneNumber, area: $area, books: $books, isDelivered: $isDelivered}
  ) {
    errors {
      field
      message
    }
    data {
      _id
      name
      phoneNumber
      area
      books
      createdAt
      updatedAt
    }
    statusCode
  }
}
    `;
export type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      name: // value for 'name'
 *      phoneNumber: // value for 'phoneNumber'
 *      area: // value for 'area'
 *      books: // value for 'books'
 *      isDelivered: // value for 'isDelivered'
 *   },
 * });
 */
export function useCreateOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, options);
      }
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const UpdateOrderDocument = gql`
    mutation UpdateOrder($name: String!, $phoneNumber: String!, $area: String!, $books: [String!]!, $isDelivered: Boolean!, $orderId: String!) {
  createOrder(
    options: {name: $name, phoneNumber: $phoneNumber, area: $area, books: $books, isDelivered: $isDelivered}
    orderId: $orderId
  ) {
    errors {
      field
      message
    }
    data {
      _id
      name
      phoneNumber
      area
      books
      createdAt
      updatedAt
    }
    statusCode
  }
}
    `;
export type UpdateOrderMutationFn = Apollo.MutationFunction<UpdateOrderMutation, UpdateOrderMutationVariables>;

/**
 * __useUpdateOrderMutation__
 *
 * To run a mutation, you first call `useUpdateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrderMutation, { data, loading, error }] = useUpdateOrderMutation({
 *   variables: {
 *      name: // value for 'name'
 *      phoneNumber: // value for 'phoneNumber'
 *      area: // value for 'area'
 *      books: // value for 'books'
 *      isDelivered: // value for 'isDelivered'
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function useUpdateOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOrderMutation, UpdateOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOrderMutation, UpdateOrderMutationVariables>(UpdateOrderDocument, options);
      }
export type UpdateOrderMutationHookResult = ReturnType<typeof useUpdateOrderMutation>;
export type UpdateOrderMutationResult = Apollo.MutationResult<UpdateOrderMutation>;
export type UpdateOrderMutationOptions = Apollo.BaseMutationOptions<UpdateOrderMutation, UpdateOrderMutationVariables>;
export const DeleteOrderDocument = gql`
    mutation DeleteOrder($orderId: String!) {
  deleteOrder(orderId: $orderId)
}
    `;
export type DeleteOrderMutationFn = Apollo.MutationFunction<DeleteOrderMutation, DeleteOrderMutationVariables>;

/**
 * __useDeleteOrderMutation__
 *
 * To run a mutation, you first call `useDeleteOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOrderMutation, { data, loading, error }] = useDeleteOrderMutation({
 *   variables: {
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function useDeleteOrderMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOrderMutation, DeleteOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOrderMutation, DeleteOrderMutationVariables>(DeleteOrderDocument, options);
      }
export type DeleteOrderMutationHookResult = ReturnType<typeof useDeleteOrderMutation>;
export type DeleteOrderMutationResult = Apollo.MutationResult<DeleteOrderMutation>;
export type DeleteOrderMutationOptions = Apollo.BaseMutationOptions<DeleteOrderMutation, DeleteOrderMutationVariables>;
export const OrdersDocument = gql`
    query Orders {
  orders {
    _id
    name
    phoneNumber
    area
    books
    isDelivered
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useOrdersQuery__
 *
 * To run a query within a React component, call `useOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useOrdersQuery(baseOptions?: Apollo.QueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options);
      }
export function useOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options);
        }
export type OrdersQueryHookResult = ReturnType<typeof useOrdersQuery>;
export type OrdersLazyQueryHookResult = ReturnType<typeof useOrdersLazyQuery>;
export type OrdersQueryResult = Apollo.QueryResult<OrdersQuery, OrdersQueryVariables>;