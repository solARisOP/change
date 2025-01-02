import Done from "./comps/Done";
import Failed from "./comps/Failed";
import Pending from "./comps/Pending";
import Process from "./comps/Process";

export const stateValues = {
    "Initiating request" : ["Initiating request", 0, <Process />],
    "Initiated request" : ["Initiated request", 0, <Done />],

    "Downloading Model" :  ["Loading Model", 1, <Process />],
    "Downloaded Model" : ["Model loaded", 1, <Done />],
    "Downloading Model Failed" : ["Failed", 1, <Failed />],

    "Downloading Data" : ["Downloading Data", 2, <Process />],
    "Downloaded Data" :  ["Data Downloaded", 2, <Done />],
    "Downloading Data Failed" : ["Failed", 2, <Failed />],

    "Inferencing" : ["Inferencing", 3, <Process />],
    "Inference Done" : ["Inference Done", 3, <Done />],
    "Inferencing Failed" : ["Failed", 3, <Failed />],

    "Uploading" : ["Preparing Results", 4, <Process />],
    "Uploaded" : ["Results", 4, <Done />, true],
    "Uploading Failed" : ["Failed", 4, <Failed />],
}

export const stateTypeList = ["Initiated request", "Model loaded", "Data Downloaded", "Inference Done", "Results"];

export const preStateList = ["request", "model", "data", "inference", "result"];