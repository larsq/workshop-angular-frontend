import {Country} from "./country";
import {Actor} from "./actor";

export interface Narrative {
  title: string;
  plot: string;
  cast: Actor[];
  released: number;
  director: string;
  countries: Country[];
  labels: string[];
}

