import { rootApi } from "features/rootApi";
import { UserDto } from "../dtos/user.dto";
import { SignUpDto } from "../dtos/signUp.dto";
import { SignInDto } from "../dtos/signIn.dto";

interface ChangeRolesDto {
	id: string;
	roles: string[];
}

export const authApi = rootApi.injectEndpoints({
	endpoints: (builder) => ({
		signUp: builder.mutation<UserDto, SignUpDto>({
			query: (signUpDto: SignUpDto) => ({
				url: '/users/signup',
				method: 'POST',
				body: signUpDto
			})
		}),
		signIn: builder.mutation<UserDto, SignInDto>({
			query: (signInDto: SignInDto) => ({
				url: '/users/signin',
				method: 'POST',
				body: signInDto
			})
		}),
		signOut: builder.mutation<void, void>({
			query: () => ({
				url: '/users/logout',
				method: 'POST',
				body: {}
			})
		}),
		me: builder.query<UserDto, void>({
			query: () => `/users/me/profile`
		}),
		getUsers: builder.query<UserDto[], void>({
			query: () => `/users`,
			providesTags: ['Users']
		}),
		changeRoles: builder.mutation<void, ChangeRolesDto>({
			query: (changeRolesDto: ChangeRolesDto) => ({
				url: `/users/roles/update`,
				method: 'PUT',
				body: changeRolesDto
			}),
			invalidatesTags: ['Users']
		})
	})
})

export const { useSignInMutation, useSignUpMutation, useSignOutMutation, useGetUsersQuery, useChangeRolesMutation } = authApi