```typescript
type Roll {
  userId?: string
  camera: Camera
  film: Film
  recipe?: Recipe
  notes: Notes
  frames: Array<Frame>
}

type Frame {
  userId?: string
  exposure: Exposure
  notes: Notes
}

type Recipe {
  film: Film
  date: Date
  chemistry: Chemistry
  developer: Developer
  iso/asa: number
  temp: number
  dilution: string
  notes: Notes
}

type Print {
  userId?: string
  chemistry: Chemistry
  enlarger: Enlarger
  paper: Paper
  exposure: Exposure
  frame: FrameID
  notes: Notes
  numberMade: number
}

type Exposure {
  date: Date
  aperture: string
  time: number
  shutter: string
  lens: Lens
  filter: Filter
}

type Chemistry {
  developer: Developer
  stop: Stop
  fixer: Fixer
  rise: Rinse
}

// roll these into a more generic type?
type Film {
  name: string
  iso/asa: number
}

type Lens {
  name: string
  maxAperture: float
  minAperture: float
  minFocal: int
  maxFocal?: int
}

type Camera {
  name: string
  format: string
}

type Enlarger {
  name: string
}
```