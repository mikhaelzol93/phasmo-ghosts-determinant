'use strict';

const GHOST_NAMES = {
  Banshee: 'Банши',
  Demon: 'Демон',
  Deogen: 'Деоген',
  Goryo: 'Горё',
  Hantu: 'Ханту',
  Jinn: 'Джинн',
  Mare: 'Мара',
  Mimic: 'Мимик',
  Moroi: 'Морой',
  Myling: 'Мюлинг',
  Obake: 'Обакэ',
  Oni: 'Они',
  Onryo: 'Онрё',
  Phantom: 'Фантом',
  Poltergeist: 'Полтергейст',
  Raiju: 'Райдзю',
  Revenant: 'Ревенант',
  Shade: 'Тень',
  Spirit: 'Дух',
  Thaye: 'Тайэ',
  Twins: 'Близнецы',
  Wraith: 'Мираж',
  Yokai: 'Ёкай',
  Yurei: 'Юрэй',
};

const EVIDENCE_NAMES = {
  EMF: 'ЭМП (ур.5)',
  GhostLight: 'Призрачный огонёк',
  LaserProjector: 'Лазерный проектор',
  NotepadEntries: 'Записи в блокноте',
  Radio: 'Радиоприёмник',
  SubzeroTemperature: 'Минусовая температура',
  Ultraviolet: 'Ультрафиолет',
};

const EVIDENCE_STATUSES = {
  Excluded: 'excluded',
  Found: 'found',
  Indefined: 'indefined',
};

const GHOST_STATUSES = {
  Excluded: 'excluded',
  Included: 'included',
};

const CSS_CLASSES = {
  Ghost: 'ghost',
  GhostExcluded: 'ghost-excluded',
  Evidence: 'evidence',
  EvidenceFound: 'evidence_found',
  EvidenceExcluded: 'evidence_excluded',
};

const EvidencesList = {
  [EVIDENCE_NAMES.EMF]: {
    status: EVIDENCE_STATUSES.Indefined,
  },
  [EVIDENCE_NAMES.GhostLight]: {
    status: EVIDENCE_STATUSES.Indefined,
  },
  [EVIDENCE_NAMES.LaserProjector]: {
    status: EVIDENCE_STATUSES.Indefined,
  },
  [EVIDENCE_NAMES.NotepadEntries]: {
    status: EVIDENCE_STATUSES.Indefined,
  },
  [EVIDENCE_NAMES.Radio]: {
    status: EVIDENCE_STATUSES.Indefined,
  },
  [EVIDENCE_NAMES.SubzeroTemperature]: {
    status: EVIDENCE_STATUSES.Indefined,
  },
  [EVIDENCE_NAMES.Ultraviolet]: {
    status: EVIDENCE_STATUSES.Indefined,
  },
};

const GhostsList = {
  [GHOST_NAMES.Banshee]: {
    evidences: [
      EVIDENCE_NAMES.GhostLight,
      EVIDENCE_NAMES.LaserProjector,
      EVIDENCE_NAMES.Ultraviolet,
    ],
    status: GHOST_STATUSES.Included,
  },
  [GHOST_NAMES.Demon]: {
    evidences: [
      EVIDENCE_NAMES.NotepadEntries,
      EVIDENCE_NAMES.SubzeroTemperature,
      EVIDENCE_NAMES.Ultraviolet,
    ],
    status: GHOST_STATUSES.Included,
  },
  [GHOST_NAMES.Deogen]: {
    evidences: [
      EVIDENCE_NAMES.LaserProjector,
      EVIDENCE_NAMES.NotepadEntries,
      EVIDENCE_NAMES.Radio,
    ],
    status: GHOST_STATUSES.Included,
  },
  [GHOST_NAMES.Goryo]: {
    evidences: [
      EVIDENCE_NAMES.EMF,
      EVIDENCE_NAMES.LaserProjector,
      EVIDENCE_NAMES.Ultraviolet,
    ],
    status: GHOST_STATUSES.Included,
  },
  [GHOST_NAMES.Hantu]: {
    evidences: [
      EVIDENCE_NAMES.GhostLight,
      EVIDENCE_NAMES.SubzeroTemperature,
      EVIDENCE_NAMES.Ultraviolet,
    ],
    status: GHOST_STATUSES.Included,
  },
  [GHOST_NAMES.Jinn]: {
    evidences: [
      EVIDENCE_NAMES.EMF,
      EVIDENCE_NAMES.SubzeroTemperature,
      EVIDENCE_NAMES.Ultraviolet,
    ],
    status: GHOST_STATUSES.Included,
  },
  [GHOST_NAMES.Mare]: {
    evidences: [
      EVIDENCE_NAMES.GhostLight,
      EVIDENCE_NAMES.NotepadEntries,
      EVIDENCE_NAMES.Radio,
    ],
    status: GHOST_STATUSES.Included,
  },
  [GHOST_NAMES.Mimic]: {
    evidences: [
      EVIDENCE_NAMES.Radio,
      EVIDENCE_NAMES.SubzeroTemperature,
      EVIDENCE_NAMES.Ultraviolet,
    ],
    status: GHOST_STATUSES.Included,
  },
  [GHOST_NAMES.Moroi]: {
    evidences: [
      EVIDENCE_NAMES.NotepadEntries,
      EVIDENCE_NAMES.Radio,
      EVIDENCE_NAMES.SubzeroTemperature,
    ],
    status: GHOST_STATUSES.Included,
  },
  [GHOST_NAMES.Myling]: {
    evidences: [
      EVIDENCE_NAMES.EMF,
      EVIDENCE_NAMES.NotepadEntries,
      EVIDENCE_NAMES.Ultraviolet,
    ],
    status: GHOST_STATUSES.Included,
  },
  [GHOST_NAMES.Obake]: {
    evidences: [
      EVIDENCE_NAMES.EMF,
      EVIDENCE_NAMES.GhostLight,
      EVIDENCE_NAMES.Ultraviolet,
    ],
    status: GHOST_STATUSES.Included,
  },
  [GHOST_NAMES.Oni]: {
    evidences: [
      EVIDENCE_NAMES.EMF,
      EVIDENCE_NAMES.LaserProjector,
      EVIDENCE_NAMES.SubzeroTemperature,
    ],
    status: GHOST_STATUSES.Included,
  },
  [GHOST_NAMES.Onryo]: {
    evidences: [
      EVIDENCE_NAMES.GhostLight,
      EVIDENCE_NAMES.Radio,
      EVIDENCE_NAMES.SubzeroTemperature,
    ],
    status: GHOST_STATUSES.Included,
  },
  [GHOST_NAMES.Phantom]: {
    evidences: [
      EVIDENCE_NAMES.LaserProjector,
      EVIDENCE_NAMES.Radio,
      EVIDENCE_NAMES.Ultraviolet,
    ],
    status: GHOST_STATUSES.Included,
  },
  [GHOST_NAMES.Poltergeist]: {
    evidences: [
      EVIDENCE_NAMES.NotepadEntries,
      EVIDENCE_NAMES.Radio,
      EVIDENCE_NAMES.Ultraviolet,
    ],
    status: GHOST_STATUSES.Included,
  },
  [GHOST_NAMES.Raiju]: {
    evidences: [
      EVIDENCE_NAMES.EMF,
      EVIDENCE_NAMES.GhostLight,
      EVIDENCE_NAMES.LaserProjector,
    ],
    status: GHOST_STATUSES.Included,
  },
  [GHOST_NAMES.Revenant]: {
    evidences: [
      EVIDENCE_NAMES.GhostLight,
      EVIDENCE_NAMES.NotepadEntries,
      EVIDENCE_NAMES.SubzeroTemperature,
    ],
    status: GHOST_STATUSES.Included,
  },
  [GHOST_NAMES.Shade]: {
    evidences: [
      EVIDENCE_NAMES.EMF,
      EVIDENCE_NAMES.NotepadEntries,
      EVIDENCE_NAMES.SubzeroTemperature,
    ],
    status: GHOST_STATUSES.Included,
  },
  [GHOST_NAMES.Spirit]: {
    evidences: [
      EVIDENCE_NAMES.EMF,
      EVIDENCE_NAMES.NotepadEntries,
      EVIDENCE_NAMES.Radio,
    ],
    status: GHOST_STATUSES.Included,
  },
  [GHOST_NAMES.Thaye]: {
    evidences: [
      EVIDENCE_NAMES.GhostLight,
      EVIDENCE_NAMES.LaserProjector,
      EVIDENCE_NAMES.NotepadEntries,
    ],
    status: GHOST_STATUSES.Included,
  },
  [GHOST_NAMES.Twins]: {
    evidences: [
      EVIDENCE_NAMES.EMF,
      EVIDENCE_NAMES.Radio,
      EVIDENCE_NAMES.SubzeroTemperature,
    ],
    status: GHOST_STATUSES.Included,
  },
  [GHOST_NAMES.Wraith]: {
    evidences: [
      EVIDENCE_NAMES.EMF,
      EVIDENCE_NAMES.LaserProjector,
      EVIDENCE_NAMES.Radio,
    ],
    status: GHOST_STATUSES.Included,
  },
  [GHOST_NAMES.Yokai]: {
    evidences: [
      EVIDENCE_NAMES.GhostLight,
      EVIDENCE_NAMES.LaserProjector,
      EVIDENCE_NAMES.Radio,
    ],
    status: GHOST_STATUSES.Included,
  },
  [GHOST_NAMES.Yurei]: {
    evidences: [
      EVIDENCE_NAMES.GhostLight,
      EVIDENCE_NAMES.LaserProjector,
      EVIDENCE_NAMES.SubzeroTemperature,
    ],
    status: GHOST_STATUSES.Included,
  },
};

const evidenceHtmlElements = document.querySelectorAll('.evidence');
const ghostHtmlElements = document.querySelectorAll('.ghost');

function changeEvidenceStatus(evidenceName) {
  const evidence = EvidencesList[evidenceName];

  if (evidence.status === EVIDENCE_STATUSES.Indefined) {
    evidence.status = EVIDENCE_STATUSES.Found;
  } else if (evidence.status === EVIDENCE_STATUSES.Found) {
    evidence.status = EVIDENCE_STATUSES.Excluded;
  } else {
    evidence.status = EVIDENCE_STATUSES.Indefined;
  }
}
function findEvidencesInUse() {
  const foundEvidences = [];
  const excludedEvidences = [];

  for (let evidenceKey in EvidencesList) {
    const evidenceStatus = EvidencesList[evidenceKey].status;

    if (evidenceStatus === EVIDENCE_STATUSES.Found)
      foundEvidences.push(evidenceKey);
    if (evidenceStatus === EVIDENCE_STATUSES.Excluded)
      excludedEvidences.push(evidenceKey);
  }

  return {
    found: foundEvidences,
    excluded: excludedEvidences,
  };
}
function changeGhostStatus(evidencesInUse) {
  for (let ghostKey in GhostsList) {
    GhostsList[ghostKey].status = GHOST_STATUSES.Included;
  }

  evidencesInUse.found.forEach((evidenceStatus) => {
    for (let ghostKey in GhostsList) {
      if (GhostsList[ghostKey].evidences.includes(evidenceStatus) === false) {
        GhostsList[ghostKey].status = GHOST_STATUSES.Excluded;
      }
    }
  });

  evidencesInUse.excluded.forEach((evidenceStatus) => {
    for (let ghostKey in GhostsList) {
      if (GhostsList[ghostKey].evidences.includes(evidenceStatus) === true) {
        GhostsList[ghostKey].status = GHOST_STATUSES.Excluded;
      }
    }
  });
}
function takePossibleEvidences() {
  const possibleEvidence = [];

  for (let ghostKey in GhostsList) {
    const ghost = GhostsList[ghostKey];
    if (ghost.status === GHOST_STATUSES.Included) {
      possibleEvidence.push(ghost.evidences);
    }
  }

  return [...new Set(possibleEvidence.flat())];
}
function takeImpossibleEvidences(possibleEvidences) {
  const evidencesNameList = [];
  const impossibleEvidences = [];

  for (let evidenceKey in EvidencesList) {
    evidencesNameList.push(evidenceKey);
  }

  evidencesNameList.forEach((evidenceName) => {
    if (possibleEvidences.includes(evidenceName) === false) {
      impossibleEvidences.push(evidenceName);
    }
  });

  return impossibleEvidences;
}
function excludeImpossibleEvidences(impossibleEvidences) {
  impossibleEvidences.forEach((evidenceName) => {
    EvidencesList[evidenceName].status = EVIDENCE_STATUSES.Excluded;
  });
}
function renderEvidences() {
  for (let index = 0; index < evidenceHtmlElements.length; ++index) {
    const evidenceElement = evidenceHtmlElements.item(index);
    const evidence = EvidencesList[evidenceElement.innerText];
    const evidenceCssGridStyle = evidenceElement.classList.value.split(' ')[1];
    const evidenceBasicCssStyle = `${CSS_CLASSES.Evidence} ${evidenceCssGridStyle}`;

    evidenceElement.classList.value = evidenceBasicCssStyle;

    if (evidence.status === EVIDENCE_STATUSES.Found) {
      evidenceElement.classList.value = `${evidenceBasicCssStyle} ${CSS_CLASSES.EvidenceFound}`;
    } else if (evidence.status === EVIDENCE_STATUSES.Excluded) {
      evidenceElement.classList.value = `${evidenceBasicCssStyle} ${CSS_CLASSES.EvidenceExcluded}`;
    }
  }
}
function renderGhosts() {
  for (let index = 0; index < ghostHtmlElements.length; ++index) {
    const ghostElement = ghostHtmlElements.item(index);
    const ghost = GhostsList[ghostElement.innerText];

    ghostElement.classList.value = CSS_CLASSES.Ghost;

    if (ghost.status === GHOST_STATUSES.Excluded) {
      ghostElement.classList.value = `${CSS_CLASSES.Ghost} ${CSS_CLASSES.GhostExcluded}`;
    }
  }
}

evidenceHtmlElements.forEach((evidenceElement) => {
  evidenceElement.onclick = (event) => {
    changeEvidenceStatus(event.target.innerText);
    const evidencesInUse = findEvidencesInUse();
    changeGhostStatus(evidencesInUse);

    const possibleEvidences = takePossibleEvidences();
    const impossibleEvidences = takeImpossibleEvidences(possibleEvidences);
    excludeImpossibleEvidences(impossibleEvidences);

    renderEvidences();
    renderGhosts();
  };
});
