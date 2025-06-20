interface IModalContext {}

type ParallelModalType = "signup" | "login";

type StandAloneType = "test" | "logout";

type IParallelState = {
  [key in ParallelModalType]: boolean;
};

type IStoneAloneState = {
  [key in StandAloneType]: boolean;
};

interface IModalState {
  parallel: IParallelState;
  standalone: IStoneAloneState;
}

export type {
  IModalContext,
  IModalState,
  ParallelModalType,
  StandAloneType,
  IParallelState,
  IStoneAloneState,
};
