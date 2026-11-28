import type { IconType } from "react-icons";
import {
  GoPackage,
  GoCreditCard,
  GoCheckCircle,
  GoClock,
  GoArchive,
  GoXCircle,
} from "react-icons/go";

export type OrderStatusFilter = {
  id: number;
  label: string;
  value: string | null;
  icon: IconType;
};

export const orderStatusFilter:Record<string, OrderStatusFilter> = {
  ALL: {
    id: 0,
    label: "همه",
    value: null,
    icon: GoPackage,
  },
  PENDING_PAYMENT: {
    id: 1,
    label: "در انتظار پرداخت",
    value: "PENDING_PAYMENT",
    icon: GoCreditCard,
  },
  PAID: {
    id: 2,
    label: "پرداخت شده",
    value: "PAID",
    icon: GoCheckCircle,
  },
  PROCESSING: {
    id: 3,
    label: "در حال پردازش",
    value: "PROCESSING",
    icon: GoClock,
  },
  SHIPPED: {
    id: 4,
    label: "ارسال شده",
    value: "SHIPPED",
    icon: GoArchive,
  },
  CANCELLED: {
    id: 5,
    label: "لغو شده",
    value: "CANCELLED",
    icon: GoXCircle,
  },
}