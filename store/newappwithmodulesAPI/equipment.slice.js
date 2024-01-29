import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_equipment_management_equipment_list = createAsyncThunk(
  "equipment/modules_equipment_management_equipment_list",
  async payload => {
    const response = await apiService.modules_equipment_management_equipment_list(
      payload
    )
    return response.data
  }
)
export const modules_equipment_management_equipment_create = createAsyncThunk(
  "equipment/modules_equipment_management_equipment_create",
  async payload => {
    const response = await apiService.modules_equipment_management_equipment_create(
      payload
    )
    return response.data
  }
)
export const modules_equipment_management_equipment_retrieve = createAsyncThunk(
  "equipment/modules_equipment_management_equipment_retrieve",
  async payload => {
    const response = await apiService.modules_equipment_management_equipment_retrieve(
      payload
    )
    return response.data
  }
)
export const modules_equipment_management_equipment_update = createAsyncThunk(
  "equipment/modules_equipment_management_equipment_update",
  async payload => {
    const response = await apiService.modules_equipment_management_equipment_update(
      payload
    )
    return response.data
  }
)
export const modules_equipment_management_equipment_partial_update = createAsyncThunk(
  "equipment/modules_equipment_management_equipment_partial_update",
  async payload => {
    const response = await apiService.modules_equipment_management_equipment_partial_update(
      payload
    )
    return response.data
  }
)
export const modules_equipment_management_equipment_destroy = createAsyncThunk(
  "equipment/modules_equipment_management_equipment_destroy",
  async payload => {
    const response = await apiService.modules_equipment_management_equipment_destroy(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const equipmentSlice = createSlice({
  name: "equipment",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        modules_equipment_management_equipment_list.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_equipment_management_equipment_list.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = action.payload
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_equipment_management_equipment_list.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_equipment_management_equipment_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_equipment_management_equipment_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_equipment_management_equipment_create.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_equipment_management_equipment_retrieve.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_equipment_management_equipment_retrieve.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = [
              ...state.entities.filter(
                record => record.id !== action.payload.id
              ),
              action.payload
            ]
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_equipment_management_equipment_retrieve.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_equipment_management_equipment_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_equipment_management_equipment_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_equipment_management_equipment_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_equipment_management_equipment_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_equipment_management_equipment_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_equipment_management_equipment_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_equipment_management_equipment_destroy.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_equipment_management_equipment_destroy.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.filter(
              record => record.id !== action.meta.arg?.id
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_equipment_management_equipment_destroy.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
  }
})
export default {
  modules_equipment_management_equipment_list,
  modules_equipment_management_equipment_create,
  modules_equipment_management_equipment_retrieve,
  modules_equipment_management_equipment_update,
  modules_equipment_management_equipment_partial_update,
  modules_equipment_management_equipment_destroy,
  slice: equipmentSlice
}
