import * as yup from 'yup';

interface arg {
  label: string;
  min?: number;
  max?: number;
}

yup.setLocale({
  mixed: {
    required: ({ label }: arg) => `${label} là bắt buộc`,
  },
  string: {
    min: ({ label, min }: arg) =>
      // label, min
      `${label} tối thiểu ${min} kí tự`,
    max: ({ label, max }: arg) =>
      // label, max
      `${label} tối đa ${max} kí tự`,
    email: () => 'Email không đúng định dạng',
    url: ({ label }: arg) => `${label} không đúng định dạng url`,
  },
  array: {
    min: ({ label, min }: arg) =>
      // label, min
      `${label} tối thiểu ${min} phẩn tử`,
    max: ({ label, max }: arg) =>
      // label, max
      `${label} tối đa ${max} phẩn tử`,
  },
});

export default yup;
