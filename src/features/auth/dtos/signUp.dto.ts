import { SignInDto } from "./signIn.dto";

export interface SignUpDto extends SignInDto {
	name: string;
	avatar: string;
}