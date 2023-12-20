import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const storeApi = createApi({
    reducerPath: 'storeApi',
    baseQuery: fetchBaseQuery({ baseUrl: ' http://localhost:5000/api/v1' }),
    endpoints: (builder) => ({
        getAllLettings: builder.query({
            query: () => `/lettings`,
        }),
        getLettingsById: builder.query({
            query: (id) => `/lettings/${id}`,
          }),
        addLettingProperty: builder.mutation({
            query: (data) => ({
                url: '/lettings',
                method: 'POST',
                body: data,
            }),
        }),
        updateLettingProperty: builder.mutation({
            query: ({ id, data }) => ({
              url: `/lettings/${id}`,
              method: 'PUT',
              body: data,
            }),
        }),
        deleteLettingProperty: builder.mutation({
            query: (id) => ({
              url: `/lettings/${id}`,
              method: 'DELETE',
            }),
          }),
          getAllSales: builder.query({
            query: () => `/sales`,
        }),
        getSalesById: builder.query({
            query: (id) => `/sales/${id}`,
          }),
        addSaleProperty: builder.mutation({
            query: (data) => ({
                url: '/sales',
                method: 'POST',
                body: data,
            }),
        }),
        updateSaleProperty: builder.mutation({
            query: ({ id, data }) => ({
              url: `/sales/${id}`,
              method: 'PUT',
              body: data,
            }),
        }),
        deleteSaleProperty: builder.mutation({
            query: (id) => ({
              url: `/sales/${id}`,
              method: 'DELETE',
            }),
          }),
        addUser: builder.mutation({
            query: (data) => ({
                url: '/auth/register',
                method: 'POST',
                body: data,
            }),
        }),
        loginUser: builder.mutation({
            query: (data) => ({
                url: '/auth/login',
                method: 'POST',
                body: data,
            }),
        }),
        editUser: builder.mutation({
            query: ({ userID, data }) => ({
                url: `/uploads${userID}`,
                method: 'PUT',
                body: data,
            })
        }),
        deleteUser: builder.mutation({
            query: (userID) => ({
                url: `/uploads${userID}`,
                method: 'DELETE',                
            })
        })
    })
})

export const {
    useGetAllLettingsQuery,
    useGetLettingsByIdQuery,
    useAddLettingPropertyMutation,
    useUpdateLettingPropertyMutation,
    useDeleteLettingPropertyMutation,
    useGetAllSalesQuery,
    useGetSalesByIdQuery,
    useAddSalePropertyMutation,
    useUpdateSalePropertyMutation,
    useDeleteSalePropertyMutation,
    useAddUserMutation,
    useEditUserMutation,
    useDeleteUserMutation,
    useLoginUserMutation
} = storeApi