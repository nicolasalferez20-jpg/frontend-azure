import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import API_URL from "../Config/Api";


export const historialApi = createApi({

    reducerPath: "historialApi",

    baseQuery: fetchBaseQuery({

        baseUrl: API_URL

    }),

    endpoints: (builder) => ({

        obtenerHistorial: builder.query({

            query: () => "/historial"
        })

    })

});

export const { useObtenerHistorialQuery } = historialApi;