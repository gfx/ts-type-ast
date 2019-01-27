export type AllTypes = Interface | InterfaceLiteral | ArrayType | Union | UnionLiteral | Enum | Native | Primitive;
export type RootTypes = Interface | Union | Enum;
export interface Primitive {
    kind: 'primitive';
    type: 'number' | 'string' | 'boolean' | 'symbol' | 'void' | 'never' | 'any';
    literal: string | number | boolean | undefined;
}
export interface Native {
    id: number;
    kind: 'native';
    name: string;
    generics: AllTypes[];
}

export interface ArrayType {
    kind: 'array';
    element: AllTypes;
}
export interface Interface {
    id: number;
    doc: string | undefined;
    name: string;
    kind: 'interface';
    members: Prop[];
}
export interface InterfaceLiteral {
    kind: 'interfaceLiteral';
    members: Prop[];
}
export interface Union {
    id: number;
    doc: string | undefined;
    name: string;
    kind: 'union';
    members: AllTypes[];
}
export interface UnionLiteral {
    kind: 'unionLiteral';
    members: AllTypes[];
}
export interface Enum {
    id: number;
    doc: string | undefined;
    name: string;
    kind: 'enum';
    types: AllTypes[];
}
export interface Prop {
    doc: string | undefined;
    name: string;
    type: AllTypes;
    args: Arg[] | undefined;
    optional: boolean;
    typeName: string | undefined;
}
export interface Arg {
    doc: string | undefined;
    name: string;
    type: AllTypes;
    typeName: string | undefined;
    optional: boolean;
}