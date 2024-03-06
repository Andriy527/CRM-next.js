import axios from "axios";
import {apiConfig} from "@/api/config";

const $base = axios.create(apiConfig);

export default $base;