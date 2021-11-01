import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";

import styles from "./styles.module.scss";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  obrigatory?: boolean;
  error?: string;
}

const FormInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  FormInputProps
> = ({ labelText, error, obrigatory = false, ...rest }, ref) => {
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        {!!labelText && (
          <label>
            {labelText} {!!obrigatory && <span>*</span>}
          </label>
        )}
        {!!error && <span>{error}</span>}
      </div>

      <input {...rest} ref={ref} />
    </div>
  );
};

export const FormInput = forwardRef(FormInputBase);
