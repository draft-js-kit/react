/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

module.exports = Object.assign(
  {
    immutable: 'immutable',
    React: 'react',
    ReactDOM: 'react-dom',
    'object-assign': 'object-assign',
    DraftOffsetKey: '@draft-js-kit/core/lib/DraftOffsetKey',
    EditorState: '@draft-js-kit/core/lib/EditorState',
    generateRandomKey: '@draft-js-kit/core/lib/generateRandomKey',
    getDefaultKeyBinding: '@draft-js-kit/core/lib/getDefaultKeyBinding',
    DefaultDraftBlockRenderMap: '@draft-js-kit/core/lib/DefaultDraftBlockRenderMap',
    DefaultDraftInlineStyle: '@draft-js-kit/core/lib/DefaultDraftInlineStyle',
    DraftEditorCompositionHandler: '@draft-js-kit/core/lib/DraftEditorCompositionHandler',
    DraftEditorDragHandler: '@draft-js-kit/core/lib/DraftEditorDragHandler',
    DraftEditorEditHandler: '@draft-js-kit/core/lib/DraftEditorEditHandler',
    ContentState: '@draft-js-kit/core/lib/ContentState',
    getDraftEditorSelection: '@draft-js-kit/core/lib/getDraftEditorSelection',
    BlockTree: '@draft-js-kit/core/lib/BlockTree',
    CharacterMetadata: '@draft-js-kit/core/lib/CharacterMetadata',
    ContentBlock: '@draft-js-kit/core/lib/ContentBlock',
    SampleDraftInlineStyle: '@draft-js-kit/core/lib/SampleDraftInlineStyle',
    SelectionState: '@draft-js-kit/core/lib/SelectionState',
    setDraftEditorSelection: '@draft-js-kit/core/lib/setDraftEditorSelection',
    ReactTestUtils: 'react-dom/lib/ReactTestUtils',
    reactComponentExpect: 'react-dom/lib/reactComponentExpect',
  },
  require('fbjs/module-map'),
  require('fbjs-scripts/third-party-module-map')
);
