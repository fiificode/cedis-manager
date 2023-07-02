import React from "react";

export type RouteProp = {
    name: string;
    element: React.LazyExoticComponent;
    exact?: boolean;
    path: string;
  };
  
  export type NavigationProp = {
    href: string[];
    icon?: unknown;
    name: string;
  };