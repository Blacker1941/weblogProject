import { getRequest } from "../services/api";


export interface Weblog {
id: string;
title: string;
author: string;
description: string;
image: string;
}

export const getWeblogs = () => {
return getRequest<Weblog[]>("/blogs");
};

