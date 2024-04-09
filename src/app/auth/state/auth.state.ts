import { User } from "src/app/shared/models/user.model";

export interface authState {
    user: User | null;
}

export const intialAuthState: authState = {
    user: null
};