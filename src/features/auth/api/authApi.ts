import { rootApi } from "features/rootApi";
import { UserDto } from "../dtos/user.dto";
import { SignUpDto } from "../dtos/signUp.dto";
import { SignInDto } from "../dtos/signIn.dto";

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
	})
})

export const { useSignInMutation, useSignUpMutation, useSignOutMutation } = authApi