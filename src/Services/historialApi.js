import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import API_URL from "../Config/Api";

export const historialApi = createApi({
  reducerPath: "historialApi",

  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),

  tagTypes: ["Historial"],

  endpoints: (builder) => ({
    // Obtener historial
    obtenerHistorial: builder.query({
      query: () => "/historial",

      providesTags: ["Historial"],
    }),

    // Eliminar PDF
    eliminarPdf: builder.mutation({
      query: (nombreArchivo) => ({
        url: `/historial/${encodeURIComponent(nombreArchivo)}`,
        method: "DELETE",
      }),

      invalidatesTags: ["Historial"],
    }),

    // Generar PDFs de un Sprint
    generarPdfsSprint: builder.mutation({
      query: (iterationPath) => ({
        url: "/generar-pdfs-sprint",
        method: "GET",
        params: {
          iteration_path: iterationPath,
        },
      }),

      // Después de generar los PDFs,
      // actualizar automáticamente el historial
      invalidatesTags: ["Historial"],
    }),
  }),
});

export const {
  useObtenerHistorialQuery,
  useEliminarPdfMutation,
  useGenerarPdfsSprintMutation,
} = historialApi;
