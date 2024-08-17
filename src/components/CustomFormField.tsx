"use client";
import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useId } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { FormFieldType } from "../constant";

type TInputProps = {
  placeholder?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  fieldType: "input" | "textarea";
};
type TSkeletonInputProps = {
  renderSkeleton?: (field: any) => any;
  fieldType: "skeleton";
};

type TCustomFormField = (TInputProps | TSkeletonInputProps) & {
  control: Control<any>;
  name: string;
  label?: string;
  children?: React.ReactNode;
};

const RenderField = ({
  field,
  id,
  props,
}: {
  field: any;
  id: string;
  props: TCustomFormField;
}) => {
  switch (props.fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex bg-third/30 items-center border px-2 rounded-md border-border-primary">
          {props.icon && <div>{props.icon}</div>}
          <FormControl>
            <Input
              className="border-0 rounded-none bg-transparent"
              id={id}
              disabled={props.disabled}
              placeholder={props.placeholder}
              {...field}
            />
          </FormControl>
        </div>
      );
    case FormFieldType.SKELETON:
      return props.renderSkeleton ? props.renderSkeleton(field) : null;
    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            disabled={props.disabled}
            placeholder={props.placeholder}
            className="min-h-32"
            {...field}
          />
        </FormControl>
      );
    default:
      break;
  }
};

const CustomFormField = (props: TCustomFormField) => {
  const { control, label, name } = props;
  const id = useId();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
          <RenderField field={field} props={props} id={id} />
          <FormMessage className="text-destructive text-xs" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
