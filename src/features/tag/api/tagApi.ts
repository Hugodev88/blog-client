import { rootApi } from "features/rootApi";

interface CreateTagDto {
	title: string;
}

export const tagApi = rootApi.injectEndpoints({
	endpoints: (builder) => ({
		createTag: builder.mutation<void, CreateTagDto>({
			query: (newTag) => ({
				url: `tags`,
				method: 'POST',
				body: newTag,
			}),
			invalidatesTags: ['Tags']
		}),
	}),
})

export const { useCreateTagMutation } = tagApi