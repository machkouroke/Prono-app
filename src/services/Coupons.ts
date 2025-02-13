import {SERVER_URL} from "../config.ts";
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const couponsApi = createApi({
    reducerPath: 'couponsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${SERVER_URL}/pronos/coupon`,
    }),
    tagTypes: ['coupon'],
    endpoints: (builder) => ({


        getCouponsData: builder.query<{
            detail: {
                coupon: CouponData
                max_date: string
                min_date: string
            }
        }, { date: string }>({
            query: (data: { date: string }) => ({
                url: `/${data.date}`,
            }),
            // @ts-expect-error  -- No overload matches this call.
            providesTags: (result, error, arg) => [
                {type: 'coupon', id: arg.date}
            ],
        }),




    })
})

export const {
    useGetCouponsDataQuery,

} = couponsApi