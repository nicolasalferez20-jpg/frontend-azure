import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import API_URL from "../Config/Api";


export const historialApi = createApi({
  reducerPath: "historialApi",

  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),

  tagTypes: ["Historial"],

  endpoints: (builder) => ({
    obtenerHistorial: builder.query({
      query: () => "/historial",

      providesTags: ["Historial"],
    }),

    eliminarPdf: builder.mutation({
      query: (nombreArchivo) => ({
        url: `/eliminar-pdf/${nombreArchivo}`,

        method: "DELETE",
      }),

      invalidatesTags: ["Historial"],
    }),
  }),
});

export const { useObtenerHistorialQuery, useEliminarPdfMutation } =
  historialApi;
