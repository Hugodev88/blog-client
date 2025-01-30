import { rootApi } from "features/rootApi";

interface CreateCategoryDto {
	title: string;
	desc: string;
}

export const categoryApi = rootApi.injectEndpoints({
	endpoints: (builder) => ({
		createCategory: builder.mutation<void, CreateCategoryDto>({
			query: (newCategory) => ({
				url: `/categories`,
				method: 'POST',
				body: newCategory
			}),
			invalidatesTags: ['Categories'],
		})
	})
})

export const { useCreateCategoryMutation } = categoryApi