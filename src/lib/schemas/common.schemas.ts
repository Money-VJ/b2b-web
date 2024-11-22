import { z } from 'zod';
import { phoneRegex, ukRegex } from '../constants/regex';

export const emailSchema = z
  .string({ required_error: 'Введіть пошту' })
  .email({ message: 'Це не є поштовою адресою' })
  .transform((value) => value.trim());

export const firstNameSchema = z
  .string({ required_error: `Введіть ім'я` })
  .min(2, 'Не коротше 2 символів')
  .max(40, 'Не довше 40 символів')
  .regex(ukRegex, 'Має містити українські літери, апостроф або дефіс')
  .transform((value) => value.trim());

export const lastNameSchema = z
  .string({ required_error: `Введіть прізвище` })
  .min(2, 'Не коротше 2 символів')
  .max(40, 'Не довше 40 символів')
  .regex(ukRegex, 'Має містити українські літери, апостроф або дефіс')
  .transform((value) => value.trim());

export const middleNameSchema = z
  .string({ required_error: `Введіть по-батькові` })
  .min(2, 'Не коротше 2 символів')
  .max(40, 'Не довше 40 символів')
  .regex(ukRegex, 'Має містити українські літери, апостроф або дефіс')
  .transform((value) => value.trim())
  .nullable();

export const phoneNumberSchema = z
  .string({
    required_error: 'Будь ласка, введіть номер телефону',
  })
  .regex(phoneRegex, {
    message:
      'Будь ласка, введіть дійсний номер телефону у форматі +380991234567.',
  })
  .transform((val) => val.replace(/[^+0-9]/g, ''))
  .refine((val) => val.length === 13, {
    message:
      'Будь ласка, введіть дійсний номер телефону у форматі +380991234567.',
  });
