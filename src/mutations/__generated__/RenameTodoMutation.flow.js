/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule RenameTodoMutation.flow
 * @generated SignedSource<<81c5cb976072fcdb9e9c4a2b4dec5284>>
 * @flow
 */

'use strict';

export type UpdateTodoInput = {
  complete?: ?boolean;
  id?: ?string;
  text?: ?string;
};

export type RenameTodoMutationResponse = {
  todo?: ?RenameTodoMutationResponse_todo;
  edge?: ?RenameTodoMutationResponse_edge;
  viewer: RenameTodoMutationResponse_viewer;
};

export type RenameTodoMutationResponse_todo = {
  id: string;
  text: string;
};

export type RenameTodoMutationResponse_edge_node = {
  id: string;
  text: string;
};

export type RenameTodoMutationResponse_edge = {
  node: RenameTodoMutationResponse_edge_node;
};

export type RenameTodoMutationResponse_viewer_allTodoes_edges_node = {
  id: string;
  text: string;
};

export type RenameTodoMutationResponse_viewer_allTodoes_edges = {
  node: RenameTodoMutationResponse_viewer_allTodoes_edges_node;
};

export type RenameTodoMutationResponse_viewer_allTodoes = {
  edges?: ?Array<?RenameTodoMutationResponse_viewer_allTodoes_edges>;
};

export type RenameTodoMutationResponse_viewer = {
  allTodoes: RenameTodoMutationResponse_viewer_allTodoes;
};