


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getBaseUrl from '../../../utils/baseURL'
// import { UpdateCloth } from '../../../../../backend/src/clothes/cloth.controller';

const baseQuery=fetchBaseQuery({
    baseUrl:`${getBaseUrl()}/api/clothes`,
    credentials:'include',
    prepareHeaders:(Headers)=>{
        const token=localStorage.getItem('token');
        if(token){
            Headers.set('Authorization',`Bearer ${token}`);
        }
        return Headers;
    }

})

const clothesApi=createApi({
    reducerPath: 'clothesApi',
    baseQuery,
    tagTypes:['Clothes'],
    endpoints:(builder)=>({
        fetchAllClothes:builder.query({
            query:()=>"/",
            providesTags:["Clothes"]

        }),
        fetchClothById:builder.query({
            query:(id)=>`${id}`,
            providesTags:(result,error,id)=>[{type:"Clothes",id}],
        }),
        addCloth:builder.mutation({
            query:(newCloth)=>({
                url:`/create-cloth`,
                method:"POST",
                body:newCloth
            }),
            invalidatesTags:["Clothes"]
        }),
        updateCloth:builder.mutation({
            query:({id, ...rest})=>({
                url:`/edit/${id}`,
                method:"PUT",
                body:rest,
                headers:{
                    'Content-Type':'application/json'

                }

            }),
            invalidatesTags:["Clothes"]

        }),
        deleteCloth:builder.mutation({
            query:(id)=>({
                url:`/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["Clothes"]

        })
    })

})

export const {useFetchAllClothesQuery,useFetchClothByIdQuery,useAddClothMutation,
    useUpdateClothMutation,useDeleteClothMutation}=clothesApi;

export default clothesApi;


