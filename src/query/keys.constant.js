import { useMutation, queryClient } from "react-query";
import { switchTodo, removeTodo, addTodo } from "../api/todos";

export const useAddMutation = () => {
  useMutation(addTodo);
};
export const useSwitchMutation = () => {
  useMutation(switchTodo);
};
export const useRemoveMutation = () => {
  useMutation(removeTodo);
};
