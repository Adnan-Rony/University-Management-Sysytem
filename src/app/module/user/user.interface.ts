

export type Tuser={
    id: string;
    password: string;
    needsPassword: boolean;
    role:'admin'|'student'|'faculty';
    status:'in-progress'|'blocked';
    isDelete: boolean;


}

