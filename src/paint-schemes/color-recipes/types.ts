export namespace ColorRecipes {
  export enum Technique {
    AIR_BRUSH,
    BASE_COAT,
    DRY_BRUSH,
    LAYER,
    WASH
  }

  export type Paint = {
    brand: string
    color: string
  }

  export type Step = {
    isComplete: boolean
    paintUsed: Paint
    techniqueUsed: Technique
  }

  export type Steps = Step[]

  export type Recipe = {
    name: string
    steps: Steps
  }
}
