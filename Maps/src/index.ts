/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const customMap = new CustomMap("map");

const user = new User();
const company = new Company();

// the objects passed in will be implicitly checked by TS if they satisfy the mappable interface.
customMap.addMarker(user);
customMap.addMarker(company);
