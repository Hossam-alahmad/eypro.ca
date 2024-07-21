"use client";
import { Control } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useId } from "react";
import { FormFieldType } from "../constant";
import { Input } from "./ui/input";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { E164Number } from "libphonenumber-js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
type TCustomFormField = {
  control: Control<any>;
  name: string;
  fieldType: FormFieldType;
  label?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  children?: React.ReactNode;
  showTimeSelect?: boolean;
  dateFormat?: string;
  renderSkeleton?: (field: any) => any;
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
  const {
    fieldType,
    renderSkeleton,
    dateFormat,
    showTimeSelect,
    icon,
    placeholder,
  } = props;

  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex bg-third/30 items-center border px-2 rounded-md border-border-primary">
          {icon && <div>{icon}</div>}
          <FormControl>
            <Input
              className="border-0 rounded-none bg-transparent"
              id={id}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
        </div>
      );
    case FormFieldType.PHONE:
      return (
        <FormControl>
          <PhoneInput
            defaultCountry="US"
            placeholder={placeholder}
            international
            value={field.value as E164Number | undefined}
            withCountryCallingCode
            onChange={field.onChange}
            className="shad-phone"
          />
        </FormControl>
      );
    case FormFieldType.DATE_PICKER:
      return (
        <div className="flex bg-third/30 items-center border px-2 rounded-md border-border-primary">
          {icon && <div>{icon}</div>}
          <FormControl>
            <DatePicker
              className="shad-input border-none"
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              showTimeSelect={showTimeSelect ?? false}
              dateFormat={dateFormat ?? "yyyy/MM/dd"}
              timeInputLabel="Time:"
              readOnly={props.disabled}
              maxDate={new Date()}
              placeholderText="2024/04/10"
            />
          </FormControl>
        </div>
      );
    case FormFieldType.SKELETON:
      return renderSkeleton ? renderSkeleton(field) : null;
    case FormFieldType.SELECT:
      return (
        <FormControl>
          <Select
            disabled={props.disabled}
            defaultValue={field.value}
            onValueChange={field.onChange}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="bg-background">
              {props.children}
            </SelectContent>
          </Select>
        </FormControl>
      );
    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            {...field}
            readOnly={props.disabled}
            placeholder={placeholder}
            className="min-h-32"
          />
        </FormControl>
      );
    case FormFieldType.CHECKBOX:
      return (
        <FormControl>
          <div className="flex items-center gap-2">
            <Checkbox
              id={id}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
            {props.label && <FormLabel htmlFor={id}>{props.label}</FormLabel>}
          </div>
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
          {label && props.fieldType !== FormFieldType.CHECKBOX && (
            <FormLabel htmlFor={id}>{label}</FormLabel>
          )}
          <RenderField field={field} props={props} id={id} />
          <FormMessage className="text-destructive text-xs" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
